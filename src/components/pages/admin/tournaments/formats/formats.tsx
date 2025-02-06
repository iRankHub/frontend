"use client"
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React, { useCallback, useEffect, useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { tournamentFormats } from "@/core/tournament/formats";
import { DataCardView } from "@/components/cards-with-filter/data-card";
import { columns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";
import { useFormatsStore } from "@/stores/admin/tournaments/formats.store";
import AppLoader from "@/lib/loader";

const PAGE_SIZE_COUNT = 20;

function Formats() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const { user } = useUserStore((state) => state);
  const { setFormats, formats } = useFormatsStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Helper function to filter out duplicates
  const removeDuplicates = (existingData: any[], newData: any[]) => {
    const existingIds = new Set(existingData.map(f => f.formatId));
    return newData.filter(format => !existingIds.has(format.formatId));
  };

  const fetchFormatsData = useCallback(async (pageToken: number, search?: string) => {
    if (!user) return 0;

    const options = {
      page_size: PAGE_SIZE_COUNT,
      page_token: pageToken,
      token: user.token,
      search: search?.trim()
    };

    try {
      const formatsRes = await tournamentFormats(options);
      const uniqueFormats = Array.from(
        new Map(formatsRes.formatsList.map(item => [item.formatId, item])).values()
      );

      if (pageToken === 0) {
        setFormats(uniqueFormats);
      } else {
        const newUniqueData = removeDuplicates(formats, uniqueFormats);
        if (newUniqueData.length > 0) {
          setFormats([...formats, ...newUniqueData]);
        }
      }

      return uniqueFormats.length;
    } catch (err) {
      console.error(err);
      return 0;
    }
  }, [user, setFormats, formats]);

  // Initial data fetch
  useEffect(() => {
    const fetchInitialData = async () => {
      if (initialLoading) {
        const count = await fetchFormatsData(0, searchTerm);
        setHasMoreData(count >= PAGE_SIZE_COUNT);
        setInitialLoading(false);
      }
    };

    fetchInitialData();
  }, [fetchFormatsData, searchTerm, initialLoading]);

  // Handle search events
  useEffect(() => {
    let searchTimeout: NodeJS.Timeout;

    const handleSearch = (e: CustomEvent<string>) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }

      searchTimeout = setTimeout(async () => {
        setSearchLoading(true);
        setSearchTerm(e.detail);
        setDefaultPageToken(0);
        const count = await fetchFormatsData(0, e.detail);
        setHasMoreData(count >= PAGE_SIZE_COUNT);
        setSearchLoading(false);
      }, 500);
    };

    const handleReset = async () => {
      setSearchLoading(true);
      setSearchTerm("");
      setDefaultPageToken(0);
      const count = await fetchFormatsData(0, "");
      setHasMoreData(count >= PAGE_SIZE_COUNT);
      setSearchLoading(false);
    };

    window.addEventListener('search-change', handleSearch as EventListener);
    window.addEventListener('reset-table', handleReset as EventListener);

    return () => {
      window.removeEventListener('search-change', handleSearch as EventListener);
      window.removeEventListener('reset-table', handleReset as EventListener);
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [fetchFormatsData]);

  const loadMore = async () => {
    if (!user || loadMoreLoading) return;

    setLoadMoreLoading(true);
    const nextPage = defaultPageToken + 1;

    const count = await fetchFormatsData(nextPage, searchTerm);

    setDefaultPageToken(nextPage);
    setHasMoreData(count >= PAGE_SIZE_COUNT);
    setLoadMoreLoading(false);
  };

  if (initialLoading) {
    return <AppLoader />;
  }

  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted bg-background">
      <DataCardView
        data={formats}
        columns={columns}
        DataTableToolbar={(props) => (
          <DataTableToolbar
            {...props}
            searchTerm={searchTerm}
            isLoading={searchLoading || loadMoreLoading}
          />
        )}
        cardType="format"
      />

      {loadMoreLoading && (
        <div className="flex items-center justify-center w-full h-96">
          <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
        </div>
      )}

      <div className="p-5 grid place-content-center">
        {formats.length >= PAGE_SIZE_COUNT && hasMoreData && (
          <Button
            type="button"
            size="sm"
            variant="link"
            className="max-w-auto mx-auto ring-0 border-none outline-none mt-10 hover:bg-primary hover:text-white underline"
            onClick={loadMore}
            disabled={loadMoreLoading}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}

export default Formats;
