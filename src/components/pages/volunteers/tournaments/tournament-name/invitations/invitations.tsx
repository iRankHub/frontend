import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { studentsInvitations } from "@/components/tables/data/tasks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

function Invitations({}: Props) {
  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 py-4 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search name or ID..."
            className="w-72 h-8"
          />
          <Button
            type="button"
            className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Date
            <span className="sr-only">Date</span>
          </Button>
          <Button
            type="button"
            variant={"default"}
            className="border border-dashed border-white gap-2 h-8 font-medium hover:bg-white hover:text-foreground group text-sm items-center"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Reason
            <span className="sr-only">Reason</span>
          </Button>
        </form>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <Tabs defaultValue="tournament">
          <TabsList className="mb-3">
            <TabsTrigger value="tournament" className="px-10">
              Tournament
            </TabsTrigger>
            <TabsTrigger value="trainings" className="px-10">
              Trainings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tournament">
            <DataTable data={studentsInvitations} columns={columns} />
          </TabsContent>
          <TabsContent value="trainings">
            <DataTable data={studentsInvitations} columns={columns} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Invitations;
