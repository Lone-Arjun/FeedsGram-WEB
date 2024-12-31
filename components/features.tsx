import {
  MessageSquare,
  Users,
  Globe,
  BarChart,
  Plug,
  HardDriveUpload
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Automated Responses",
    description: "Set up automatic replies to customer inquiries.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Manage and organize customer data easily.",
  },
  {
    icon: Globe,
    title: "BroadCast",
    description: "Reach customers globally with faster rate.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Track and analyze customer interactions.",
  },
  {
    icon: Plug,
    title: "Easy Integration",
    description: "Integrate seamlessly with existing business systems.",
  },
  {
    icon: HardDriveUpload,
    title: "Blazing Speed",
    description: "Faster and smoother experience.",
  },
];

export function Features() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Key Features
        </h2>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icon className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}