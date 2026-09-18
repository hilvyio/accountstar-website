import { ChevronRight } from "relume-icons";
import { Gold } from "@/components/Gold";
import { Header81 } from "@/components/relume/Header81";
import { Layout620 } from "@/components/relume/Layout620";
import { Layout659 } from "@/components/relume/Layout659";
import { MISSION, services } from "@/content";

export function ServicesPage() {
  return (
    <>
      <Header81
        compact
        heading={
          <>
            <Gold>Accounting services</Gold> for small businesses, individuals and start-ups
          </>
        }
        description="Affordable, professional support designed to make your finances and obligations easier to understand."
        buttons={[
          { title: "Contact us", url: "/contact-us" },
          { title: "Free Chat", url: "https://calendly.com/stella_e/15min", variant: "gold" },
        ]}
        image={{ src: "/images/stella-services.png", alt: "Stella Ezeogu of Accountstar" }}
      />
      <Layout620
        tagline=""
        heading="Choose the support that fits"
        description="From annual filing to regular financial oversight, every service is shaped around your current needs and future plans."
        listItems={services.slice(0, 3).map((service) => ({
          icon: (
            <img src={service.icon} alt="" className="h-16 w-auto brightness-0 invert md:h-20" />
          ),
          heading: service.name,
          description: service.summary,
          url: service.href,
        }))}
        buttons={[
          { title: "Self-employed", url: "/self-employed", variant: "gold" },
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
        tagline="Personal, accessible advice"
        heading="We'd love to help you work through your accounts"
        description={MISSION}
        image={{ src: "/images/stella-office.jpg", alt: "Stella Ezeogu at work" }}
        buttons={[{ title: "Contact us", url: "/contact-us" }]}
      />
    </>
  );
}
