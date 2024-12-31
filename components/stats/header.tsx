"use client";

import { MessageSquare, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatsHeaderProps {
  botName?: string;
  onRefresh: () => void;
  isLoading: boolean;
}

export function StatsHeader({ botName = "Bot", onRefresh, isLoading }: StatsHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-8 w-8" />
        <h1 className="text-2xl font-bold">{botName} Dashboard</h1>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onRefresh}
        disabled={isLoading}
      >
        <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
        Refresh Stats
      </Button>
    </header>
  );
}