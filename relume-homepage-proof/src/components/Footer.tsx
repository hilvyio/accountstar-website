import { Button } from "@/components/ui/button";
import { CALENDLY, EMAIL, WHATSAPP, footerColumns, team } from "@/content";

export function Footer() {
  const linkColumns = footerColumns.filter((column) => column.title !== "Contact");

  return (
    <footer className="relative overflow-hidden bg-[#5e4380] text-white">
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-gold via-[#e8d56a] to-brand-gold" />
      <div
        className="pointer-events-none absolute right-[-8rem] top-[-6rem] size-[28rem] rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-10rem] left-[-6rem] size-[24rem] rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />

      <div className="relative container px-[5%] py-12 md:py-16">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/15 bg-white/10 px-6 py-7 backdrop-blur-sm md:flex-row md:items-center md:px-10">
          <div>
            <p className="mb-2 text-tiny font-semibold tracking-[0.16em] text-brand-gold uppercase">
              Free 15-minute chat
            </p>
            <p className="max-w-xl text-h4 font-bold">Ready to take control of your numbers?</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button url={CALENDLY} title="Book a free chat" variant="gold" />
            <Button url={WHATSAPP} title="WhatsApp us" variant="secondary-alt" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-16">
          <div>
            <a
              href="/"
              className="mb-6 inline-flex rounded-2xl bg-white px-5 py-3.5 shadow-[0_18px_40px_rgb(0_0_0_/_18%)]"
              aria-label="Accountstar home"
            >
              <img src="/images/accountstar-logo.png" alt="" className="h-16 w-auto" />
            </a>
            <p className="mb-6 max-w-sm text-medium text-white/85">
              Professional accounting for sole traders, limited companies, charities and CICs.
            </p>
            <div className="mb-6 flex">
              {team.map((member) => (
                <img
                  key={member.name}
                  src={member.image}
                  alt={member.alt}
                  className="-ml-2 size-12 rounded-full border-2 border-[#5e4380] object-cover first:ml-0"
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <img src="/images/top-50-badge.png" alt="Top 50 Women in Accounting" className="h-16 w-auto" />
              <img src="/images/acca-logo.png" alt="ACCA" className="h-12 w-auto rounded-md" />
            </div>
          </div>

          {linkColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="mb-3 text-tiny font-semibold tracking-[0.16em] text-brand-gold uppercase">
                {column.title}
              </p>
              <div className="mb-5 h-0.5 w-10 bg-brand-gold" />
              <ul className="grid gap-3 text-small text-white/80">
                {column.links.map((link) => (
                  <li key={link.url + link.title}>
                    <a href={link.url} className="transition-colors hover:text-brand-gold">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-small text-white/70">
          <a href={EMAIL} className="transition-colors hover:text-brand-gold">
            admin@accountstar.co.uk
          </a>
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
