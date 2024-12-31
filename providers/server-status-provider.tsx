'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useServerStatus } from '@/hooks/use-server-status';
import { ServerStatus } from '@/types/server-status';

interface ServerStatusContextType {
  data: ServerStatus | null;
  error: Error | null;
  isLoading: boolean;
}

const ServerStatusContext = createContext<ServerStatusContextType | undefined>(undefined);

export function ServerStatusProvider({ children }: { children: ReactNode }) {
  const status = useServerStatus();

  return (
    <ServerStatusContext.Provider value={status}>
      {children}
    </ServerStatusContext.Provider>
  );
}

export function useServerStatusContext() {
  const context = useContext(ServerStatusContext);
  if (context === undefined) {
    throw new Error('useServerStatusContext must be used within a ServerStatusProvider');
  }
  return context;
}