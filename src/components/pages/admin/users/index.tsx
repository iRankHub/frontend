"use client";

import React, { useEffect } from "react";
import { columns } from "./columns";
import { useUserStore } from "@/stores/auth/auth.store";
import { GetSchoolsType } from "@/types/user_management/schools";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { DataTable } from "@/components/tables/data-table-users";
import { getAllUsers } from "@/core/users/users";
import { DataTableToolbar } from "./data-table-toolbar";

function Users() {
  const { user } = useUserStore((state) => state);
  const { users, setUsers } = useUsersStore((state) => state);

  useEffect(() => {
    if (!user) return;
    const options: GetSchoolsType = {
      pageSize: 200,
      page: 1,
      token: user.token,
    };
    getAllUsers({ ...options })
      .then((res) => {
        setUsers(res.usersList);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [user, setUsers]);
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
