import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
        Simplify Customer Interactions with FeedsGram
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        Automate and streamline your business's customer communication through our easy-to-use Telegram bot.
      </p>
      <div className="space-x-4">
        <Button size="lg" className="gap-2">
          <a href='https://t.me/feedsgrambot' target="_blank" rel="noopener noreferrer">
            Get Started Today
          </a>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}