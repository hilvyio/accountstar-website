import { Header81 } from "@/components/relume/Header81";
import { Layout659 } from "@/components/relume/Layout659";
import { Layout620 } from "@/components/relume/Layout620";
import { MISSION } from "@/content";

export function AboutPage() {
  return (
    <>
      <Header81
        compact
        heading="I am Stella Ezeogu, a Chartered Certified Accountant"
        description="I am here to help you understand your numbers and make confident financial decisions."
        buttons={[
          { title: "Meet the team", url: "/team" },
          { title: "Contact us", url: "/contact-us", variant: "gold" },
        ]}
        image={{ src: "/images/stella-about.jpg", alt: "Stella Ezeogu, founder of Accountstar" }}
      />
      <Layout659
        tagline="Our mission"
        heading="Accessible expertise for growing businesses"
        description={`${MISSION} Accountstar was formed to serve small businesses and new entrepreneurs from diverse backgrounds.`}
        image={{ src: "/images/stella-office.jpg", alt: "Stella Ezeogu at work" }}
        buttons={[{ title: "Work with us", url: "/contact-us" }]}
      />
      <Layout620
        tagline=""
        heading="Our core values"
        description=""
        listItems={[
          {
            icon: (
              <img
                src="/images/icons/value-professionalism.svg"
                alt=""
                className="h-16 w-auto brightness-0 invert md:h-20"
              />
            ),
            heading: "Professionalism",
            description:
              "Every client benefits from the expertise of the whole firm. Our growth has been driven by referrals from people who know and trust our work.",
          },
          {
            icon: (
              <img
                src="/images/icons/value-service.svg"
                alt=""
                className="h-16 w-auto brightness-0 invert md:h-20"
              />
            ),
            heading: "Passion for service",
            description:
              "We hold ourselves to high standards and offer insightful advice that helps clients make informed financial decisions.",
          },
          {
            icon: (
              <img
                src="/images/icons/value-commitment.svg"
                alt=""
                className="h-16 w-auto brightness-0 invert md:h-20"
              />
            ),
            heading: "Commitment",
            description:
              "We combine experience, energy and personal attention so every client has a reliable and accessible financial advocate.",
          },
        ]}
        buttons={[]}
      />
      <section className="px-[5%] py-12 md:py-16">
        <div className="container flex flex-wrap items-center gap-8">
          <div className="max-w-md">
            <p className="mb-2 text-small font-semibold text-brand-500">Professional recognition</p>
            <h2 className="text-h4 font-bold">Qualified, experienced and recognised</h2>
          </div>
          <img src="/images/acca-logo.png" alt="ACCA" className="h-20 w-auto" />
          <img src="/images/top-50-badge.png" alt="Top 50 Women in Accounting" className="h-24 w-auto" />
        </div>
      </section>
    </>
  );
}
