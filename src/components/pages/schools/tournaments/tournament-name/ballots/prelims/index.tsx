import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { ballotPreliminaries } from "@/components/tables/data/tasks";

type Props = {};

function Preliminaries({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 py-4 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search school..."
            className="w-72 h-8"
          />
        </form>
      </div>
      <div className="w-full bg-background p-5">
        <Tabs defaultValue="round 1">
          <TabsList className="mb-3">
            <TabsTrigger value="round 1" className="px-5">Round 1</TabsTrigger>
            <TabsTrigger value="round 2" className="px-5">Round 2</TabsTrigger>
            <TabsTrigger value="round 3" className="px-5">Round 3</TabsTrigger>
          </TabsList>
          <TabsContent value="round 1">
            <DataTable data={ballotPreliminaries} columns={columns} />
          </TabsContent>
          <TabsContent value="round 2">
            <DataTable data={ballotPreliminaries} columns={columns} />
          </TabsContent>
          <TabsContent value="round 3">
            <DataTable data={ballotPreliminaries} columns={columns} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Preliminaries;
