'use client';

import { useState, useEffect } from 'react';
import { ServerStatus } from '@/types/server-status';

export function useServerStatus() {
  const [data, setData] = useState<ServerStatus | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await fetch('https://webhook.site/114635a4-6e37-48a0-a209-cafa041d46b8');
        if (!response.ok) {
          throw new Error('Failed to fetch server status');
        }
        const rawData = await response.json();
        
        // Transform the API response to match our types
        const transformedData: ServerStatus = {
          status: rawData.status,
          services: rawData.services.map((service: any, index: number) => ({
            id: `service-${index}`,
            name: service.name,
            status: service.status.toLowerCase(),
            lastUpdated: new Date().toISOString()
          })),
          announcements: rawData.announcements.map((announcement: string, index: number) => ({
            id: `announcement-${index}`,
            title: 'System Update',
            message: announcement,
            severity: 'info',
            date: new Date().toISOString()
          })),
          maintenance: rawData.maintenance.map((event: any, index: number) => ({
            id: `maintenance-${index}`,
            title: 'Scheduled Maintenance',
            description: event.description,
            startTime: event.date,
            endTime: event.date,
            status: 'scheduled'
          })),
          lastUpdated: new Date().toISOString()
        };
        
        setData(transformedData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return { data, error, isLoading };
}