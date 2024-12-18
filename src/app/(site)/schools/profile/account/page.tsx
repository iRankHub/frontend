"use client";
import { ContentLayout } from "@/components/layout/schools-panel/content-layout";
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
import AccountMenuWrapper from "@/components/pages/schools/profile/accounts-menu-wrapper";
import AccountForm from "@/components/pages/schools/profile/account-form";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { getUserProfile } from "@/core/users/users";
import { UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { ToastAction } from "@/components/ui/toast";
import AppLoader from "@/lib/loader";

const Page = withAuth(() => {
  return <SchoolAccountPage />;
}, [Roles.SCHOOL]);

function SchoolAccountPage() {
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
          console.log(userProfileRes.profile)
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
            <h2 className="text-2xl font-semibold mb-4">No Account Information Available</h2>
            <p className="mb-2">We couldn&apos;t fetch your account information.</p>
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
                Student
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
        <AccountForm user={user} />
      </AccountMenuWrapper>
    </ContentLayout>
  );
}

export default Page;