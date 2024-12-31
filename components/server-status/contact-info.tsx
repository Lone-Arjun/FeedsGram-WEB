'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Support</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:support@example.com" className="text-sm hover:underline">
              support@example.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            <a
              href="https://support.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Visit Support Portal
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}