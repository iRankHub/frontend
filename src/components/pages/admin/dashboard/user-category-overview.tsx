import {
  CircleUserRound,
  GraduationCap,
  School,
  ShieldEllipsis,
} from "lucide-react";
import React from "react";

type Props = {
  admin_count: number;
  student_count: number;
  school_count: number;
  volunteer_count: number;
};

function UserCategoryOverview({
  admin_count,
  school_count,
  student_count,
  volunteer_count,
}: Props) {
  return (
    <div className="p-7 bg-background rounded-lg border-2 border-muted mb-3 md:mb-0">
      <h2 className="text-foreground text-xl capitalize">Users Per Category</h2>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded">
              <ShieldEllipsis
                width={20}
                height={20}
                className="m-1 text-primary"
              />
            </div>
            <span className="text-sm text-[#3A3541] dark:text-foreground">
              Admins
            </span>
          </div>
          <span className="text-sm text-[#3A3541] dark:text-foreground">
            {admin_count}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded">
              <GraduationCap
                width={20}
                height={20}
                className="m-1 text-primary"
              />
            </div>
            <span className="text-sm text-[#3A3541] dark:text-foreground">
              Students
            </span>
          </div>
          <span className="text-sm text-[#3A3541] dark:text-foreground">
            {student_count}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded">
              <School width={20} height={20} className="m-1 text-primary" />
            </div>
            <span className="text-sm text-[#3A3541] dark:text-foreground">
              Schools
            </span>
          </div>
          <span className="text-sm text-[#3A3541] dark:text-foreground">
            {school_count}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded">
              <CircleUserRound
                width={20}
                height={20}
                className="m-1 text-primary"
              />
            </div>
            <span className="text-sm text-[#3A3541] dark:text-foreground">
              Volunteers
            </span>
          </div>
          <span className="text-sm text-[#3A3541] dark:text-foreground">
            {volunteer_count}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCategoryOverview;
