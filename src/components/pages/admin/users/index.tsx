"use client";

import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { useUserStore } from "@/stores/auth/auth.store";
import { GetSchoolsType } from "@/types/user_management/schools";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { DataTable } from "@/components/tables/data-table-users";
import { getAllUsers } from "@/core/users/users";
import { DataTableToolbar } from "./data-table-toolbar";
import AppLoader from "@/lib/loader";

function Users() {
  const { user } = useUserStore((state) => state);
  const { users, setUsers, pagination, setPagination } = useUsersStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    if (!user) return;

    setIsLoading(true);
    const options: GetSchoolsType = {
      pageSize: pagination.pageSize,
      page: pagination.pageIndex + 1, // Convert to 1-based index for API
      token: user.token,
    };

    try {
      const usersRes = await getAllUsers({ ...options });
      setUsers(usersRes.usersList);
      setPagination({ totalCount: usersRes.totalcount });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchUserData();
  }, [pagination.pageIndex, pagination.pageSize, user]);

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <div className="w-full rounded-md overflow-hidden border border-muted">
      <DataTable
        data={users}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default Users;
