'use client';

import { useState, useEffect } from 'react';

export interface Stats {
  botName: string;
  totalUsers: number;
  totalGroups: number;
  bannedUsers: number;
  totalFilters: number;
  outgoingMessages: number;
  incomingMessages: number;
  startMessage: string;
  autoReplies: number;
  botToken: string;
  ownerId: string;
  lastMessageTime: string;
}

export function useStats(sessionId: string | null) {
  const [data, setData] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchStats = async () => {
    if (!sessionId) {
      setError(new Error('Session Expired - Please login again'));
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://webhook.site/10e85aab-bd84-47f5-9cda-f15ac182b65f?session_id=${sessionId}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      if (response.status === 404) {
        throw new Error('Session Expired');
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch stats: ${response.statusText}`);
      }

      const apiData = await response.json();
      setData({
        botName: apiData.botName || 'Bot',
        totalUsers: apiData.totalUsers || 0,
        totalGroups: apiData.totalGroups || 0,
        bannedUsers: apiData.bannedUsers || 0,
        totalFilters: apiData.totalFilters || 0,
        outgoingMessages: apiData.outgoingMessages || 0,
        incomingMessages: apiData.incomingMessages || 0,
        startMessage: apiData.startMessage || 'Not set',
        autoReplies: apiData.autoReplies || 0,
        botToken: apiData.botToken || 'Not available',
        ownerId: apiData.ownerId || 'Not available',
        lastMessageTime: apiData.lastMessageTime || 'Never',
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [sessionId]);

  const refreshStats = () => {
    setIsLoading(true);
    setError(null);
    fetchStats();
  };

  return { data, isLoading, error, refreshStats };
}