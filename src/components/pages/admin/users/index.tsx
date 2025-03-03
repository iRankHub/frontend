"use client";
import React, { useEffect, useState, useCallback } from "react";
import { columns } from "./columns";
import { useUserStore } from "@/stores/auth/auth.store";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { DataTable } from "@/components/tables/data-table-users";
import { getAllUsers } from "@/core/users/users";
import { DataTableToolbar } from "./data-table-toolbar";
import AppLoader from "@/lib/loader";
import { GetAllUsers } from "@/types/user_management/users";
import { Table } from "@tanstack/react-table";

function Users() {
  const { user } = useUserStore((state) => state);
  const { users, setUsers, pagination, setPagination } = useUsersStore(
    (state) => state
  );
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUserData = useCallback(
    async (searchValue: string, pageIndex: number) => {
      if (!user) return;
      setIsLoading(true);
      const options: GetAllUsers = {
        pageSize: pagination.pageSize,
        page: pageIndex + 1,
        token: user.token,
        searchQuery: searchValue.trim() || undefined,
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
    },
    [pagination.pageSize, user, setPagination, setUsers]
  );

  // Handle search term changes
  useEffect(() => {
    if (searchTerm !== undefined) {
      fetchUserData(searchTerm, 0); // Reset to first page when searching
    }
  }, [searchTerm, fetchUserData]);

  // Handle pagination changes
  useEffect(() => {
    fetchUserData(searchTerm, pagination.pageIndex);
  }, [pagination.pageIndex, fetchUserData, searchTerm]);

  useEffect(() => {
    let searchTimeout: NodeJS.Timeout;

    const handleSearch = (e: CustomEvent<string>) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        setSearchTerm(e.detail);
      }, 500);
    };

    const handleReset = () => {
      setSearchTerm("");
      setPagination({ pageIndex: 0 });
    };

    window.addEventListener("search-change", handleSearch as EventListener);
    window.addEventListener("reset-table", handleReset as EventListener);

    return () => {
      window.removeEventListener(
        "search-change",
        handleSearch as EventListener
      );
      window.removeEventListener("reset-table", handleReset as EventListener);
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [setPagination]);

  const ToolbarWrapper = useCallback(
    (props: { table: Table<any> }) => (
      <DataTableToolbar
        {...props}
        searchTerm={searchTerm}
        isLoading={isLoading}
      />
    ),
    [searchTerm, isLoading]
  );

  if (isLoading && !users.length) {
    return <AppLoader />;
  }

  return (
    <div className="w-full rounded-md overflow-hidden border border-muted">
      <DataTable
        data={users}
        columns={columns}
        DataTableToolbar={ToolbarWrapper}
      />
    </div>
  );
}
export default Users;
