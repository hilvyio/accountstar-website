import { Button } from "@/components/ui/button";
import { CALENDLY, footerColumns } from "@/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-500 text-white">
      <div className="h-1.5 w-full bg-brand-gold" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-16 size-80 rounded-full bg-brand-gold/20 blur-3xl"
        aria-hidden
      />

      <div className="relative container px-[5%] py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          <div className="max-w-md">
            <a
              href="/"
              className="mb-6 inline-flex rounded-xl bg-white px-4 py-3 shadow-lg"
              aria-label="Accountstar home"
            >
              <img src="/images/accountstar-logo.png" alt="" className="h-14 w-auto" />
            </a>
            <p className="mb-8 text-medium text-white/85">
              Accountstar was formed to serve small businesses and new entrepreneurs from diverse
              backgrounds.
            </p>
            <Button url={CALENDLY} title="Book a free chat" variant="gold" />
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <p className="mb-5 text-tiny font-semibold tracking-[0.14em] text-brand-gold uppercase">
                  {column.title}
                </p>
                <ul className="grid gap-3 text-small text-white/80">
                  {column.links.map((link) => (
                    <li key={link.url + link.title}>
                      <a
                        href={link.url}
                        className="transition-colors hover:text-brand-gold"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6 text-small text-white/70">
          <p>© {new Date().getFullYear()} Accountstar</p>
          <p>
            Website by{" "}
            <a
              href="https://derrick.dk"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors hover:text-brand-gold"
            >
              Derrick.dk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
