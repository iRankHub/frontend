import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { DataTableToolbar } from "./data-table-toolbar";
import { useJudgeFeedbacksStore } from "@/stores/admin/debate/feedbacksVolunteer.store";

function VolunteerFeedback() {
  const { feedbacks } = useJudgeFeedbacksStore((state) => state);

  return (
    <div className="w-full rounded-md overflow-hidden border border-muted">
      <DataTable
        data={feedbacks}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default VolunteerFeedback;


