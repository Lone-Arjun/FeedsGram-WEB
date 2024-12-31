'use client';

import { MaintenanceEvent } from '@/types/server-status';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface MaintenanceScheduleProps {
  schedules?: MaintenanceEvent[];
  isLoading: boolean;
}

export function MaintenanceSchedule({ schedules, isLoading }: MaintenanceScheduleProps) {
  if (isLoading) {
    return <Skeleton className="h-48 w-full" />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Maintenance Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        {schedules?.length ? (
          <div className="space-y-4">
            {schedules.map((event) => (
              <div key={event.id} className="flex gap-3 p-3 border rounded-lg">
                <Clock className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
                    <time>Start: {event.startTime}</time>
                    <span>•</span>
                    <time>End: {event.endTime}</time>
                    <span>•</span>
                    <span className="capitalize">{event.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No scheduled maintenance</p>
        )}
      </CardContent>
    </Card>
  );
}