"use client";
import { ContentLayout } from "@/components/layout/volunteer-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Slash } from "lucide-react";
import AccountMenuWrapper from "@/components/pages/volunteers/profile/accounts-menu-wrapper";
import PasswordsForm from "@/components/pages/volunteers/profile/passwords-form";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { getUserProfile } from "@/core/users/users";
import { ToastAction } from "@/components/ui/toast";

const page = withAuth(() => {
  return <Page />;
}, [Roles.VOLUNTEER]);

function Page() {
  const { toast } = useToast();
  const { user: storeUser } = useUserStore((state) => state);
  const [user, setUser] = useState<UserProfile.AsObject | null>(null);

  useEffect(() => {
    if (!storeUser) return;
    const getUser = async () => {
      await getUserProfile({
        userID: storeUser.userId,
        token: storeUser.token,
      }).then((res) => {
        if (res.profile) {
          setUser(res.profile);
        }
      });
    };
    getUser().catch((err) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    });
  }, [storeUser, toast]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <ContentLayout title="format">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-5">
        <h3 className="text-lg text-primary font-bold">Settings</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-muted-foreground text-base">
                Volunteer
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-muted-foreground text-base">
                Profile
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary text-base">
                Account
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <AccountMenuWrapper>
        <PasswordsForm user={user} />
      </AccountMenuWrapper>
    </ContentLayout>
  );
}

export default page;
