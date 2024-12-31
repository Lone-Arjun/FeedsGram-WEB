import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Clock } from "lucide-react";

interface BotInfoProps {
  ownerId: string;
  lastMessageTime: string;
}

export function BotInfo({ ownerId, lastMessageTime }: BotInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Bot Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Owner ID</span>
          <span className="text-sm font-mono">{ownerId}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">
            <Clock className="h-4 w-4 inline mr-2" />
            Last Message
          </span>
          <span className="text-sm">{lastMessageTime}</span>
        </div>
      </CardContent>
    </Card>
  );
}