'use client';

import { AlertCircle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="rounded-lg border border-destructive p-4 flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-destructive" />
        <p className="text-destructive">{message}</p>
      </div>
    </div>
  );
}