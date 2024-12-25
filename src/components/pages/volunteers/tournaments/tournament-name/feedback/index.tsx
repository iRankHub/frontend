import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { useJudgeFeedbacksStore } from "@/stores/admin/debate/feedbacksVolunteer.store";

interface VolunteerFeedbackProps {
  isLoading: boolean;
  onLoadMore: () => void;
}

function VolunteerFeedback({ isLoading, onLoadMore }: VolunteerFeedbackProps) {
  const { feedbacks, totalCount } = useJudgeFeedbacksStore((state) => state);

  return (
    <div className="w-full rounded-md overflow-hidden border border-muted">
      <DataTable
        columns={columns}
        data={feedbacks}
        infiniteScroll={true}
        isLoading={isLoading}
        hasMore={feedbacks.length < totalCount}
        onLoadMore={onLoadMore}
      />
    </div>
  );
}

export default VolunteerFeedback;


