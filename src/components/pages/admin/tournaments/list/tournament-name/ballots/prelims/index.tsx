import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { ballotPreliminaries } from "@/components/tables/data/tasks";
import { DataTableToolbar } from "./data-table-toolbar";

type Props = {};

function Preliminaries({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <Tabs defaultValue="round 1">
        <TabsList className="mb-3">
          <TabsTrigger value="round 1" className="px-5">
            Round 1
          </TabsTrigger>
          <TabsTrigger value="round 2" className="px-5">
            Round 2
          </TabsTrigger>
          <TabsTrigger value="round 3" className="px-5">
            Round 3
          </TabsTrigger>
        </TabsList>
        <TabsContent value="round 1">
          <DataTable
            data={ballotPreliminaries}
            columns={columns}
            DataTableToolbar={DataTableToolbar}
          />
        </TabsContent>
        <TabsContent value="round 2">
          <DataTable
            data={ballotPreliminaries}
            columns={columns}
            DataTableToolbar={DataTableToolbar}
          />
        </TabsContent>
        <TabsContent value="round 3">
          <DataTable
            data={ballotPreliminaries}
            columns={columns}
            DataTableToolbar={DataTableToolbar}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Preliminaries;
