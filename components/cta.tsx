import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Not sure which plan is right for you?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Contact us to find out how Feedsgram can help your business grow.
        </p>
        <Button size="lg" className="mt-4">
          <a href='https://t.me/godmrunal' target="_blank" rel="noopener noreferrer">
            Contact US
          </a>
        </Button>
      </div>
    </section>
  );
}