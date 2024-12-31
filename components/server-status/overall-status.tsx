'use client';

import { StatusBadge } from './status-badge';
import { Skeleton } from '@/components/ui/skeleton';

interface OverallStatusProps {
  status?: 'up' | 'down' | 'maintenance';
  isLoading: boolean;
}

export function OverallStatus({ status, isLoading }: OverallStatusProps) {
  if (isLoading) {
    return <Skeleton className="h-24 w-full" />;
  }

  return (
    <div className="rounded-lg border p-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">Overall System Status</h2>
      <StatusBadge status={status || 'down'} />
    </div>
  );
}