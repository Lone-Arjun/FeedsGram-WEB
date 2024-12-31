"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Free Forever",
    description: "Perfect for small businesses or startups just starting with customer interaction automation.",
    price: "₹0",
    features: [
      "3 bots per account",
      "Unlimited requests and users",
      "3 group integrations",
      "Basic customer management tools",
      "Limited email support",
      "Access to core features of Feedsgram",
    ],
    cta: "Start for Free",
    telegramLink: "t.me/feedsgrambot?start=free"
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses needing advanced features and enhanced customer management tools.",
    price: "₹39",
    features: [
      "5 bots per account",
      "Unlimited users and requests",
      "Multi-channel integration",
      "Advanced customer segmentation & tagging",
      "Analytics and reporting tools",
      "Priority email and chat support",
      "Higher limits for filters",
      "Up to 5 group integrations",
    ],
    cta: "Upgrade to Pro",
    popular: true,
    telegramLink: "t.me/feedsgrambot?start=pro"
  },
  {
    name: "Ultra",
    description: "Designed for large businesses or enterprises requiring premium features and dedicated support.",
    price: "₹99",
    features: [
      "8 bots per account",
      "Unlimited requests and users",
      "Dedicated 24/7 priority support",
      "Higher limits for filters",
      "Faster responses",
      "Full customization of user interaction workflows",
      "Dedicated account manager",
    ],
    cta: "Get Ultra Now",
    telegramLink: "t.me/feedsgrambot?start=ultra"
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <div className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Choose Your Plan
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Select the plan that best suits your business needs.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? "relative border-primary" : ""}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
                Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={plan.telegramLink} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}