'use client';

import { useSearchParams } from 'next/navigation';
import { StatsHeader } from '@/components/stats/header';
import { StatsOverview } from '@/components/stats/overview';
import { MessagingStats } from '@/components/stats/messaging';
import { BotConfig } from '@/components/stats/config';
import { BotInfo } from '@/components/stats/bot-info';
import { useStats } from '@/hooks/use-stats';

export default function AdminDashboard() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { data, isLoading, error, refreshStats } = useStats(sessionId);

  if (!sessionId) {
    return (
      <div className="container py-12">
        <div className="rounded-lg border border-destructive p-4">
          <p className="text-destructive">
            Session Expired - Please login again
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12">
        <div className="rounded-lg border border-destructive p-4">
          <p className="text-destructive">
            {error.message || 'An error occurred while loading the dashboard'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container space-y-8 py-8">
      <StatsHeader
        botName={data?.botName}
        onRefresh={refreshStats}
        isLoading={isLoading}
      />
      <StatsOverview data={data} isLoading={isLoading} />
      <div className="grid gap-8 md:grid-cols-2">
        <MessagingStats data={data} isLoading={isLoading} />
        <BotConfig data={data} isLoading={isLoading} />
      </div>
      <BotInfo
        ownerId={data?.ownerId || 'Not available'}
        lastMessageTime={data?.lastMessageTime || 'Never'}
      />
    </div>
  );
}