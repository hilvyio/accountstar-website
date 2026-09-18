import { footerColumns } from "@/content";

export function Footer() {
  return (
    <footer className="bg-brand-500 px-[5%] py-12 text-white md:py-16">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr_1.2fr]">
        <div className="max-w-sm">
          <a href="/" className="mb-5 inline-block bg-white p-2" aria-label="Accountstar home">
            <img src="/images/accountstar-logo.png" alt="" className="h-14 w-auto" />
          </a>
          <p className="text-white/80">
            Accountstar was formed to serve small businesses and new entrepreneurs from diverse
            backgrounds.
          </p>
        </div>
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="mb-4 text-tiny font-semibold tracking-[0.08em] text-white uppercase">
              {column.title}
            </p>
            <ul className="grid gap-2 text-small text-white/80">
              {column.links.map((link) => (
                <li key={link.url + link.title}>
                  <a href={link.url} className="hover:text-white hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container mt-10 flex flex-wrap justify-between gap-3 border-t border-white/25 pt-5 text-small text-white/70">
        <p>© {new Date().getFullYear()} Accountstar</p>
        <p>
          Website by{" "}
          <a
            href="https://derrick.dk"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:underline"
          >
            Derrick.dk
          </a>
        </p>
      </div>
    </footer>
  );
}
