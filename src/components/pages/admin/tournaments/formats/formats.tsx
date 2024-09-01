import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

import { useUserStore } from "@/stores/auth/auth.store";
import { tournamentFormats } from "@/core/tournament/formats";
import { DataCardView } from "@/components/cards-with-filter/data-card";
import { columns } from "./columns";
import { DataTableToolbar } from "./data-table-toolbar";
import { useFormatsStore } from "@/stores/admin/tournaments/formats.store";

function Formats({}) {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const { user } = useUserStore((state) => state);
  const { setFormats, formats } = useFormatsStore((state) => state);
  const [defaultPageToken, setDefaultPageToken] = useState<number>(0);
  const [loadMoreLoading, setLoadMoreLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user) return;
    const data = {
      page_size: 10,
      page_token: 0,
      token: user.token,
    };
    tournamentFormats({ ...data })
      .then((res) => {
        setFormats(res.formatsList);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setPageLoading(false);
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
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted bg-background">
      {pageLoading ? (
        <div className="flex items-center justify-center w-full h-96">
          <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : formats.length ? (
        <>
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
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-96">
          <p className="text-darkBlue text-lg font-semibold">
            No formats available
          </p>
        </div>
      )}
      <div className="p-5">
        {formats.length > 20 && (
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
