'use client';

import { Service } from '@/types/server-status';
import { StatusBadge } from './status-badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServicesListProps {
  services?: Service[];
  isLoading: boolean;
}

export function ServicesList({ services, isLoading }: ServicesListProps) {
  if (isLoading) {
    return <Skeleton className="h-64 w-full" />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services?.length ? (
            services.map((service) => (
              <div key={service.id} className="flex items-center justify-between p-2 border-b last:border-0">
                <div>
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">Last updated: {service.lastUpdated}</p>
                </div>
                <StatusBadge status={service.status} />
              </div>
            ))
          ) : (
            <p className="text-muted-foreground">No services to display</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}