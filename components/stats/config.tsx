import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageSquareText, Reply } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface BotConfigProps {
  data?: any;
  isLoading: boolean;
}

export function BotConfig({ data, isLoading }: BotConfigProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-4 w-4" />
          Bot Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquareText className="h-4 w-4" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-sm font-medium">
                  Start Message
                </TooltipTrigger>
                <TooltipContent>
                  <p>Message sent when users start the bot</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <span className="text-sm">{data?.startMessage || "Not set"}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Reply className="h-4 w-4" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-sm font-medium">
                  Auto Replies
                </TooltipTrigger>
                <TooltipContent>
                  <p>Number of configured automatic responses</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <span className="text-sm">{data?.autoReplies || 0}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-sm font-medium">
                  Bot Token
                </TooltipTrigger>
                <TooltipContent>
                  <p>Unique identifier for your bot</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <span className="text-sm font-mono">
            {data?.botToken ? "••••••••" + data.botToken.slice(-4) : "Not available"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}