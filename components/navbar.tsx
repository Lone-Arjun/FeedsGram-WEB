"use client";

import * as React from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6" />
            <span className="font-bold">FeedsGram</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="default" size="sm">
            <a href='https://t.me/feedsgrambot' target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}