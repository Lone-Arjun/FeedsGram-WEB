'use client';

import { ServerStatusProvider } from '@/providers/server-status-provider';
import { StatusDashboard } from '@/components/server-status/dashboard';

export default function ServerStatusPage() {
  return (
    <ServerStatusProvider>
      <StatusDashboard />
    </ServerStatusProvider>
  );
}