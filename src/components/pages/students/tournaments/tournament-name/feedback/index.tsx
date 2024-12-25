import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { useFeedbacksStore } from "@/stores/admin/debate/feedbacks.store";

interface StudentFeedbacksProps {
  isLoading: boolean;
  onLoadMore: () => void;
}

function StudentFeedbacks({ isLoading, onLoadMore }: StudentFeedbacksProps) {
  const { feedbacks, totalCount } = useFeedbacksStore((state) => state);

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

export default StudentFeedbacks;


