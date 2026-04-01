import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function HomeContactForm() {
  return (
    <section id="contact" className="container-shell mt-6 scroll-mt-28 md:mt-8">
      <Card className="rounded-[1.9rem]">
        <CardContent className="px-6 py-10 sm:px-8 md:px-12 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">Get in touch</p>
              <h2 className="max-w-2xl text-balance text-4xl font-semibold sm:text-5xl">Open to the right role.</h2>
              <p className="max-w-2xl text-lg leading-8">
                If you&apos;re building something that needs production AI engineering with real software rigour - I&apos;d like to hear about it.
              </p>
            </div>

            <form
              action="mailto:bhuveshsharma09@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-[1.35rem] border border-[var(--color-line)] bg-white/62 px-5 py-3.5 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:bg-white"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full rounded-[1.35rem] border border-[var(--color-line)] bg-white/62 px-5 py-3.5 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:bg-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about the role or project"
                  className="w-full resize-y rounded-[1.35rem] border border-[var(--color-line)] bg-white/62 px-5 py-4 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:bg-white"
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit">Send message</Button>
                <p className="text-sm text-[var(--color-muted)]">
                  Or reach me directly at{" "}
                  <a
                    href="mailto:bhuveshsharma09@gmail.com"
                    className="font-medium text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
                  >
                    bhuveshsharma09@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
