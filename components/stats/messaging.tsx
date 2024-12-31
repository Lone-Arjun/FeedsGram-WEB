import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, MessageSquare } from "lucide-react";

interface MessagingStatsProps {
  data?: any;
  isLoading: boolean;
}

export function MessagingStats({ data, isLoading }: MessagingStatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          Messaging Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">Outgoing Messages</p>
              <p className="text-2xl font-bold">{data?.outgoingMessages || 0}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">Incoming Messages</p>
              <p className="text-2xl font-bold">{data?.incomingMessages || 0}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}