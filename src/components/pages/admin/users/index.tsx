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
  const { users, setUsers } = useUsersStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const options: GetSchoolsType = {
      pageSize: 200,
      page: 1,
      token: user.token,
    };

    const fetchUsers = getAllUsers({ ...options });

    Promise.all([fetchUsers])
      .then(([usersRes]) => {
        setUsers(usersRes.usersList);
      })
      .catch((err) => {
        console.error(err.message);
        // You might want to add a toast notification here
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, setUsers]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!users.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">No Users Available</h2>
          <p className="mb-2">We couldn&apos;t fetch any users.</p>
          <p>This could be because there are no users in the system or due to a system error.</p>
        </div>
      </div>
    );
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