import { Header81 } from "@/components/relume/Header81";
import { Card } from "@/components/ui/card";
import type { ServiceDetail } from "@/content";
import { CALENDLY, services } from "@/content";

function medalIcon(name: string) {
  const label = name.toLowerCase();
  if (label.includes("gold")) return "/images/icons/gold-medal.svg";
  if (label.includes("silver")) return "/images/icons/silver-medal.svg";
  if (label.includes("bronze")) return "/images/icons/bronze-medal.svg";
  return null;
}

export function ServiceDetailPage({ page }: { page: ServiceDetail }) {
  const icon = services.find((service) => service.href === page.path)?.icon;

  return (
    <>
      <Header81
        compact
        heading={page.title}
        description={page.description}
        buttons={[
          { title: "Contact us", url: "/contact-us" },
          { title: "Free Chat", url: CALENDLY, variant: "gold" },
        ]}
        image={{ src: page.image, alt: page.imageAlt }}
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container grid gap-12 md:grid-cols-2">
          {page.blocks.map((block, index) => (
            <div key={block.title}>
              {index === 0 && icon ? (
                <img src={icon} alt="" className="mb-5 h-16 w-auto" />
              ) : null}
              {index === 0 ? (
                <p className="mb-2 text-small font-semibold text-brand-500">{page.eyebrow}</p>
              ) : null}
              <h2 className="mb-4 text-h3 font-bold">{block.title}</h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-medium">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-brand-500 px-[5%] py-16 text-white md:py-24">
        <div className="container">
          <h2 className="mb-4 text-h2 font-bold">{page.offeringTitle}</h2>
          <p className="mb-10 max-w-2xl text-white/80">{page.offeringIntro}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {page.offerings.map((offering) => {
              const medal = medalIcon(offering.name);
              return (
              <Card key={offering.name} className="border-white/30 bg-transparent p-6 text-white">
                {medal ? (
                  <img src={medal} alt="" className="mb-4 h-16 w-16 object-contain" />
                ) : null}
                <h3 className="mb-3 text-h5 font-bold text-white">{offering.name}</h3>
                <p className="mb-4 text-white/80">{offering.intro}</p>
                {offering.items ? (
                  <ul className="list-disc space-y-2 pl-5 text-small text-white/80">
                    {offering.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
