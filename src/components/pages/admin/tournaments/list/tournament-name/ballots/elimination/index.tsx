import { columns } from "@/app/(site)/admin/tournaments/list/[name]/ballots/elimination/_components/columns";
import { DataTable } from "@/app/(site)/admin/tournaments/list/[name]/ballots/elimination/_components/data-table";
import { tasks } from "@/app/(site)/admin/tournaments/list/[name]/ballots/elimination/data/tasks";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type Props = {};

function Elimination({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 py-4 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search school..."
            className="w-72 h-8"
          />
          <Button
            type="button"
            className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Room
            <span className="sr-only">Room</span>
          </Button>
        </form>
      </div>
      <div className="w-full bg-background p-5">
        <Tabs defaultValue="round 1">
          <TabsList className="mb-3">
            <TabsTrigger value="round 1" className="px-5">Quater-Finals</TabsTrigger>
            <TabsTrigger value="round 2" className="px-5">Semi-Finals</TabsTrigger>
            <TabsTrigger value="round 3" className="px-5">Finals</TabsTrigger>
          </TabsList>
          <TabsContent value="round 1">
            <DataTable data={tasks} columns={columns} />
          </TabsContent>
          <TabsContent value="round 2">
            <DataTable data={tasks} columns={columns} />
          </TabsContent>
          <TabsContent value="round 3">
            <DataTable data={tasks} columns={columns} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Elimination;
