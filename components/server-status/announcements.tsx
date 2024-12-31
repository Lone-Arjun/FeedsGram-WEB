'use client';

import { Announcement } from '@/types/server-status';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface AnnouncementsProps {
  announcements?: Announcement[];
  isLoading: boolean;
}

const severityIcons = {
  info: Info,
  warning: AlertTriangle,
  critical: AlertCircle,
};

export function Announcements({ announcements, isLoading }: AnnouncementsProps) {
  if (isLoading) {
    return <Skeleton className="h-48 w-full" />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        {announcements?.length ? (
          <div className="space-y-4">
            {announcements.map((announcement) => {
              const Icon = severityIcons[announcement.severity];
              return (
                <div key={announcement.id} className="flex gap-3 p-3 border rounded-lg">
                  <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{announcement.title}</h3>
                    <p className="text-sm text-muted-foreground">{announcement.message}</p>
                    <time className="text-xs text-muted-foreground mt-1 block">{announcement.date}</time>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-muted-foreground">No new announcements</p>
        )}
      </CardContent>
    </Card>
  );
}