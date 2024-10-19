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

function Formats() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore((state) => state);
  const { setFormats, formats } = useFormatsStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const fetchFormats = tournamentFormats({
      page_size: 10,
      page_token: 0,
      token: user.token,
    });

    Promise.all([fetchFormats])
      .then(([formatsRes]) => {
        setFormats(formatsRes.formatsList);
      })
      .catch((err) => {
        console.error(err.message);
        // You might want to add a toast notification here
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, setFormats]);

  const handleLoadMore = async () => {
    if (!user) return;
    setDefaultPageToken(defaultPageToken + 1);
    const data = {
      page_size: 20,
      page_token: defaultPageToken + 1,
      token: user.token,
    };
    setLoadMoreLoading(true);
    await tournamentFormats({ ...data })
      .then((res) => {
        setFormats([...formats, ...res.formatsList]);
      })
      .catch((err) => {
        console.error(err.message);
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
        setFormats={setFormats}
        cardType="format"
      />
      {loadMoreLoading && (
        <div className="flex items-center justify-center w-full h-96">
          <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
        </div>
      )}
      <div className="p-5">
        {formats.length >= 10 && (
          <Button
            type="button"
            size={"sm"}
            variant={"link"}
            className="max-w-auto mx-auto ring-0 border-none outline-none mt-10 hover:bg-primary hover:text-white underline"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}

export default Formats;