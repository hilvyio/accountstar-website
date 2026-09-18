import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Banner5 } from "@/components/relume/Banner5";
import { Navbar1 } from "@/components/relume/Navbar1";
import { Footer } from "@/components/Footer";
import { Cta25 } from "@/components/relume/Cta25";
import { ContactEmbeds } from "@/components/ContactEmbeds";
import { CALENDLY, EMAIL, WAITLIST, navLinks } from "@/content";

type Props = {
  children: ReactNode;
};

export function SiteChrome({ children }: Props) {
  const { pathname } = useLocation();
  const showCta = pathname !== "/contact-us";

  useEffect(() => {
    window.scrollTo(0, 0);
    const titles: Record<string, string> = {
      "/": "Accountstar — Accounting and tax services",
      "/services": "Services — Accountstar",
      "/self-employed": "Self-employed — Accountstar",
      "/limited-company-accounting": "Limited companies — Accountstar",
      "/non-profit-accounting": "Non-profits — Accountstar",
      "/speaking-engagements": "Speaking engagements — Accountstar",
      "/about-us": "About — Accountstar",
      "/team": "Meet the team — Accountstar",
      "/resources": "Resources — Accountstar",
      "/reviews": "Reviews — Accountstar",
      "/contact-us": "Contact — Accountstar",
    };
    document.title = titles[pathname] ?? "Accountstar";
  }, [pathname]);
  return (
    <div className="min-h-svh overflow-x-hidden bg-white text-scheme-text">
      <div className="sticky top-0 z-[1000] bg-white">
      <Banner5
        headingStart="We are currently not accepting new clients, but will reopen soon."
        link={{ url: WAITLIST, title: "Email us to join the waitlist" }}
        headingEnd=""
      />
      <Navbar1
        logo={{ url: "/", src: "/images/accountstar-logo.png", alt: "Accountstar" }}
        navLinks={navLinks}
        buttons={[
          { title: "Free Chat", url: CALENDLY, variant: "gold", size: "sm" },
          { title: "Contact", url: "/contact-us", size: "sm" },
        ]}
      />
      </div>
      {children}
      {showCta ? (
        <Cta25
          heading="Need something personalised?"
          description="Tell us what you need and we will help you find the right accounting support."
          buttons={[
            { title: "Book a free chat", url: CALENDLY, variant: "gold" },
            { title: "Email us", url: EMAIL, variant: "secondary-alt" },
          ]}
        />
      ) : null}
      <ContactEmbeds />
      <Footer />
    </div>
  );
}
