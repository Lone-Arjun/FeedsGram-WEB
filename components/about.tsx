export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          About FeedsGram
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          At Feedsgram, we're dedicated to revolutionizing how businesses interact with their customers. Our Telegram bot solution simplifies customer communication while maintaining a personal touch.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-[58rem] grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-background p-8">
          <blockquote className="text-lg italic">
            "FeedsGram has been a game-changer for managing my Telegram groups. The bot's automation features help me keep everything in order effortlessly, and the customer support is exceptional. Highly recommend it to anyone running a Telegram community!"
          </blockquote>
          <p className="mt-4 font-semibold">Dash</p>
          <p className="text-sm text-muted-foreground">User , Digital Marketer.</p>
        </div>
        <div className="rounded-lg border bg-background p-8">
          <blockquote className="text-lg italic">
            "FeedsGram helped me streamline customer interactions during our events. The ability to set up automated responses and manage multiple Telegram groups seamlessly was a big plus. The analytics feature is great for tracking engagement and growth. I love it!"
          </blockquote>
          <p className="mt-4 font-semibold">Michael Chen</p>
          <p className="text-sm text-muted-foreground">Event Organizer.</p>
        </div>
      </div>
    </section>
  );
}