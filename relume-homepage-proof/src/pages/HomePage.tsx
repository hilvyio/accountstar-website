import { ChevronRight } from "relume-icons";
import { Header81 } from "@/components/relume/Header81";
import { Logo1 } from "@/components/relume/Logo1";
import { Layout620 } from "@/components/relume/Layout620";
import { Layout659 } from "@/components/relume/Layout659";
import { CALENDLY, services } from "@/content";

export function HomePage() {
  return (
    <>
      <Header81
        heading="Helping you take control of your business finances and taxes"
        description="Professional and affordable accounting and tax services for sole traders, limited companies, charities and CICs."
        buttons={[
          { title: "Accounting Services", url: "/services" },
          { title: "Free Chat", url: CALENDLY, variant: "gold" },
        ]}
        image={{
          src: "/images/stella-hero.jpg",
          alt: "Stella Ezeogu, founder of Accountstar",
        }}
      />
      <Logo1
        heading="Currently working with"
        logos={[
          { src: "/images/client-gym-kitchen.png", alt: "Gym Kitchen" },
          { src: "/images/client-kessies.jpg", alt: "Kessies Consulting" },
          { src: "/images/client-socially-inspired.png", alt: "Socially Inspired" },
          { src: "/images/client-stn.png", alt: "STN" },
        ]}
      />
      <Layout620
        id="services"
        tagline=""
        heading="Solutions for every business need."
        description="Professional accounting support for the way you work."
        listItems={services.slice(0, 3).map((service) => ({
          icon: (
            <img src={service.icon} alt="" className="h-16 w-auto brightness-0 invert md:h-20" />
          ),
          heading: service.name,
          description: service.summary,
          url: service.href,
        }))}
        buttons={[
          { title: "View all services", url: "/services", variant: "gold" },
          {
            title: "Speaking engagements",
            url: "/speaking-engagements",
            variant: "link-alt",
            size: "link",
            iconRight: <ChevronRight className="text-white" />,
          },
        ]}
      />
      <Layout659
        tagline="I am here to help you understand your numbers"
        heading="Accounting support that makes business feel simpler."
        description="Accountstar was formed to serve small businesses and new entrepreneurs from diverse backgrounds. We provide affordable, professional accounting services and make tax obligations and statutory requirements easy to understand."
        image={{
          src: "/images/stella-office.jpg",
          alt: "Stella Ezeogu working in the Accountstar office",
        }}
        buttons={[
          { title: "More about Accountstar", url: "/about-us" },
          {
            title: "Meet the team",
            url: "/team",
            variant: "link",
            size: "link",
            iconRight: <ChevronRight className="text-scheme-text" />,
          },
        ]}
      />
    </>
  );
}
