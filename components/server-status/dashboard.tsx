'use client';

import { useServerStatus } from '@/hooks/use-server-status';
import { OverallStatus } from './overall-status';
import { ServicesList } from './services-list';
import { Announcements } from './announcements';
import { MaintenanceSchedule } from './maintenance-schedule';
import { ContactInfo } from './contact-info';
import { ErrorDisplay } from './error-display';

export function StatusDashboard() {
  const { data, error, isLoading } = useServerStatus();

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">System Status</h1>
      <OverallStatus status={data?.status} isLoading={isLoading} />
      <ServicesList services={data?.services} isLoading={isLoading} />
      <Announcements announcements={data?.announcements} isLoading={isLoading} />
      <MaintenanceSchedule schedules={data?.maintenance} isLoading={isLoading} />
      <ContactInfo />
    </div>
  );
}