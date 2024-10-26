"use client"
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { tournamentFormats } from "@/core/tournament/formats";
import { DataCardView } from "@/components/cards-with-filter/data-card";
import { columns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";
import { useFormatsStore } from "@/stores/admin/tournaments/formats.store";
import AppLoader from "@/lib/loader";

const PAGE_SIZE_COUNT = 20;

function Formats() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore((state) => state);
  const { setFormats, formats } = useFormatsStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  // Helper function to filter out duplicates
  const removeDuplicates = (existingData: any[], newData: any[]) => {
    const existingIds = new Set(existingData.map(f => f.formatId));
    return newData.filter(format => !existingIds.has(format.formatId));
  };

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const fetchFormats = tournamentFormats({
      page_size: PAGE_SIZE_COUNT,
      page_token: 0,
      token: user.token,
    });

    Promise.all([fetchFormats])
      .then(([formatsRes]) => {
        const uniqueFormats = Array.from(
          new Map(formatsRes.formatsList.map(item => [item.formatId, item])).values()
        );
        setFormats(uniqueFormats);

        if (uniqueFormats.length < PAGE_SIZE_COUNT) {
          setHasMoreData(false);
        }
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, setFormats]);

  const loadMore = async () => {
    if (!user) return;
    setLoadMoreLoading(true);

    const data = {
      page_size: PAGE_SIZE_COUNT,
      page_token: defaultPageToken + 1,
      token: user.token,
    };

    await tournamentFormats({ ...data })
      .then((res) => {
        if (res.formatsList.length > 0) {
          const newUniqueData = removeDuplicates(formats, res.formatsList);

          if (newUniqueData.length > 0) {
            setFormats([...formats, ...newUniqueData]);
            setDefaultPageToken(prev => prev + 1);
          }

          if (res.formatsList.length < PAGE_SIZE_COUNT || newUniqueData.length === 0) {
            setHasMoreData(false);
          }
        } else {
          console.log("No new data returned");
          setHasMoreData(false);
        }
      })
      .catch((err) => {
        console.error("Error loading more formats:", err.message);
      })
      .finally(() => {
        setLoadMoreLoading(false);
      });
  };

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted bg-background">
      <DataCardView
        data={formats}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
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
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}

export default Formats;