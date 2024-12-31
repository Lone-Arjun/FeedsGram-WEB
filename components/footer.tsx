import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:gap-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6" />
            <span className="font-bold">Feedsgram</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Simplifying customer interactions through intelligent automation.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Product</h3>
            <Link href="#features" className="text-sm text-muted-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary">
              Pricing
            </Link>
            {/* Added Updates and Bot links inside Product section */}
            <Link 
              href="https://t.me/feedsgram" 
              target="_blank" 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Updates
            </Link>
            <Link 
              href="https://t.me/feedsgrambot" 
              target="_blank" 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Bot
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Company</h3>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="/developer" className="text-sm text-muted-foreground hover:text-primary">
              Developer
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Legal</h3>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex py-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Feedsgram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
