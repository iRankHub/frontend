'use client'

import { Roles } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import React from "react";

const page = withAuth(() => {
  return <div>This is the Admin page.</div>;
}, [Roles.SCHOOL]);

export default page;
