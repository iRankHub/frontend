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
import AccountMenuWrapper from "@/components/pages/admin/profile/accounts-menu-wrapper";
import PasswordsForm from "@/components/pages/admin/profile/passwords-form";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { getUserProfile } from "@/core/users/users";
import { ToastAction } from "@/components/ui/toast";
import AppLoader from "@/lib/loader";

const Page = withAuth(() => {
  return <AccountSettingsPage />;
}, [Roles.ADMIN]);

function AccountSettingsPage() {
  const { toast } = useToast();
  const { user: storeUser } = useUserStore((state) => state);
  const [user, setUser] = useState<UserProfile.AsObject | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!storeUser) return;
    setIsLoading(true);

    const fetchUserProfile = getUserProfile({
      userID: storeUser.userId,
      token: storeUser.token,
    });

    Promise.all([fetchUserProfile])
      .then(([userProfileRes]) => {
        if (userProfileRes.profile) {
          setUser(userProfileRes.profile);
        }
      })
      .catch((err) => {
        console.error(err.message);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [storeUser, toast]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!user) {
    return (
      <ContentLayout title="format">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">No Information Available</h2>
            <p className="mb-2">We couldn{`'`}t fetch your account information.</p>
            <p>This could be because of a system error. Please try again later.</p>
          </div>
        </div>
      </ContentLayout>
    );
  }

  return (
    <ContentLayout title="format">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-5">
        <h3 className="text-lg text-primary font-bold">Settings</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-muted-foreground text-base">
                Admin
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

export default Page;