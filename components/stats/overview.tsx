import { Users, UserMinus, Group, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { StatsCard } from "./stats-card";

interface StatsOverviewProps {
  data?: any;
  isLoading: boolean;
}

export function StatsOverview({ data, isLoading }: StatsOverviewProps) {
  const stats = [
    {
      title: "Total Users",
      value: data?.totalUsers || 0,
      icon: Users,
      description: "Active users interacting with the bot"
    },
    {
      title: "Total Groups",
      value: data?.totalGroups || 0,
      icon: Group,
      description: "Groups where the bot is active"
    },
    {
      title: "Banned Users",
      value: data?.bannedUsers || 0,
      icon: UserMinus,
      description: "Users blocked from using the bot"
    },
    {
      title: "Active Filters",
      value: data?.totalFilters || 0,
      icon: Filter,
      description: "Currently active message filters"
    }
  ];

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Skeleton className="h-4 w-[100px]" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-[60px]" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
