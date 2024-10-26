"use client";
import { ContentLayout } from "@/components/layout/students-panel/content-layout";
import StudentFeedbacks from "@/components/pages/students/tournaments/tournament-name/feedback";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  getStudentFeedback,
  GetStudentFeedback,
} from "@/core/debates/feedback";
import { getTournament } from "@/core/tournament/list";
import { StudentFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import AppLoader from "@/lib/loader";
import { useFeedbacksStore } from "@/stores/admin/debate/feedbacks.store";
import { Roles, useUserStore } from "@/stores/auth/auth.store";
import { withAuth } from "@/stores/auth/middleware.store";
import { Iparms } from "@/types";
import { GetTournamentType } from "@/types/tournaments/tournament";
import { Slash } from "lucide-react";
import React, { useEffect } from "react";

const page = withAuth(
  ({ params }: Iparms) => {
    return <Page params={params} />;
  },
  [Roles.STUDENT]
);

function Page({ params }: Iparms) {
  const { name: tourn_id } = params;
  const { user } = useUserStore((state) => state);
  const [tournament, setTournament] = React.useState<
    Tournament.AsObject | undefined
  >(undefined);
  const {setFeedbacks} = useFeedbacksStore((state) => state);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);

    const data: GetTournamentType = {
      tournament_id: Number(tourn_id) || 0,
      token: user.token,
    };

    const options: GetStudentFeedback = {
      token: user.token,
      tournament_id: Number(tourn_id) || 0,
      page: 1,
      page_size: 500,
    };

    const fetchTournament = getTournament({ ...data });
    const fetchJudges = getStudentFeedback(options);

    Promise.all([fetchTournament, fetchJudges])
      .then(([tournamentRes, judgesRes]) => {
        setTournament(tournamentRes.tournament);
        setFeedbacks(judgesRes);
      })
      .catch((err) => {
        console.error(err.message);
        // You might want to add a toast notification here
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, tourn_id, setFeedbacks]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!tournament) {
    return (
      <ContentLayout title="format">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Tournament Not Found
            </h2>
            <p className="mb-2">
              We couldn&apos;t fetch the tournament details.
            </p>
            <p>
              This could be because the tournament doesn&apos;t exist or due to
              a system error.
            </p>
          </div>
        </div>
      </ContentLayout>
    );
  }
  return (
    <ContentLayout title="list">
      <div className="w-full flex items-center justify-between gap-5 mb-4">
        <h3 className="text-lg text-primary font-semibold">All Feedbacks</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/students/dashboard"
                className="text-muted-foreground"
              >
                Student
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="-rotate-12" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-muted-foreground">
                Tournaments
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <StudentFeedbacks />
    </ContentLayout>
  );
}

export default page;
