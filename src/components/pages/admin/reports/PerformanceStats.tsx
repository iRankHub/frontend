import { GraduationCap, School } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Icons } from "@/components/icons";
import { StudentPerformanceTable } from "./student-performance-table";
import { VolunteerPerformanceTable } from "./volunteer-performance-table";
import { SchoolPerformanceTable } from "./school-performance-table";
import { TeamsPerformanceTable } from "./teams-performance-table";

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
        <TabsTrigger
          value="schools"
          className="w-full text-muted-foreground gap-2 data-[state=active]:text-white"
        >
          <School />
          Schools
        </TabsTrigger>
        <TabsTrigger
          value="teams"
          className="w-full text-muted-foreground gap-2 data-[state=active]:text-white"
        >
          <Icons.users />
          Teams
        </TabsTrigger>
      </TabsList>

      <TabsContent value="students" className="w-full h-full">
        <StudentPerformanceTable type="Student" />
      </TabsContent>

      <TabsContent value="volunteers" className="w-full h-full">
        <VolunteerPerformanceTable type="Volunteer" />
      </TabsContent>

      <TabsContent value="schools" className="w-full h-full">
        <SchoolPerformanceTable type="School" />
      </TabsContent>

      <TabsContent value="teams" className="w-full h-full">
        <TeamsPerformanceTable type="team" />
      </TabsContent>
    </Tabs>
  );
}

export default PerformanceStats;
