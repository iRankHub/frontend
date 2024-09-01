import { Icons } from "@/components/icons";
import { UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import {
  CircleUserRound,
  GraduationCap,
  School,
  ShieldEllipsis,
} from "lucide-react";
import React from "react";

type Props = {
  usersList: UserSummary.AsObject[];
};

function UserCategoryOverview({ usersList }: Props) {
  const adminUsersCount = usersList.filter((user) => user.userrole === "admin");
  const volunteerUsersCount = usersList.filter(
    (user) => user.userrole === "volunteer"
  );
  const studentUsersCount = usersList.filter(
    (user) => user.userrole === "student"
  );
  const schoolUsersCount = usersList.filter(
    (user) => user.userrole === "school"
  );

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
            <span className="text-sm text-[#3A3541]">Admins</span>
          </div>
          <span className="text-sm text-[#3A3541]">
            {adminUsersCount.length}
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
            <span className="text-sm text-[#3A3541]">Students</span>
          </div>
          <span className="text-sm text-[#3A3541]">
            {studentUsersCount.length}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded">
              <School width={20} height={20} className="m-1 text-primary" />
            </div>
            <span className="text-sm text-[#3A3541]">Schools</span>
          </div>
          <span className="text-sm text-[#3A3541]">
            {schoolUsersCount.length}
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
            <span className="text-sm text-[#3A3541]">Volunteers</span>
          </div>
          <span className="text-sm text-[#3A3541]">
            {volunteerUsersCount.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCategoryOverview;
