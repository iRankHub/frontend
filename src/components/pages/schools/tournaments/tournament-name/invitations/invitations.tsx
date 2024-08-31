import React from "react";
import { DataTable } from "@/components/tables/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInvitationsStore } from "@/stores/admin/tournaments/invitations.store";
import { DataTableToolbar } from "./data-table-toolbar";
import { columns } from "./columns";

type Props = {};

function Invitations({}: Props) {
  const { invitations } = useInvitationsStore((state) => state);
  return (
    <div className="w-full rounded-md overflow-hidden">
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
            <DataTable
              data={invitations}
              columns={columns}
              DataTableToolbar={DataTableToolbar}
            />
          </TabsContent>
          <TabsContent value="trainings">
            <DataTable
              data={invitations}
              columns={columns}
              DataTableToolbar={DataTableToolbar}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Invitations;
