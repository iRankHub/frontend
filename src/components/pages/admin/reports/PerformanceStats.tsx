import { GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Icons } from "@/components/icons";
import { PerformanceTable } from "./performance-table";

type Props = {};

function PerformanceStats({}: Props) {
  return (
    <Tabs defaultValue="students" className="w-full flex flex-col h-full pt-8 px-5">
      <TabsList className="p-0 mb-8 bg-white dark:bg-muted shadow-sm border">
        <TabsTrigger
          value="students"
          className="w-full text-muted-foreground gap-2 data-[state=active]:text-white"
        >
          <GraduationCap />
          Students
        </TabsTrigger>

        <TabsTrigger
          value="volunteers"
          className="w-full text-muted-foreground gap-2 data-[state=active]:text-white"
        >
          <Icons.users />
          Volunteers
        </TabsTrigger>
      </TabsList>

      <TabsContent value="students" className="w-full h-full">
        <PerformanceTable type="Student" />
      </TabsContent>

      <TabsContent value="volunteers" className="w-full h-full">
        <PerformanceTable type="Volunteer" />
      </TabsContent>
    </Tabs>
  );
}

export default PerformanceStats;
