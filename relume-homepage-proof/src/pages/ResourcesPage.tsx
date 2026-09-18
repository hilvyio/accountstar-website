import { Header81 } from "@/components/relume/Header81";
import { Layout659 } from "@/components/relume/Layout659";
import { TEMPLATE_EMAIL } from "@/content";

export function ResourcesPage() {
  return (
    <>
      <Header81
        compact
        heading="Resources"
        description="Practical resources to help you organise your finances and make better-informed business decisions."
        buttons={[{ title: "Request the template", url: TEMPLATE_EMAIL }]}
        image={{ src: "/images/resources-hero.jpg", alt: "Person working on a financial plan" }}
      />
      <Layout659
        tagline="Free download"
        heading="Financial plan template"
        description="Build a clearer view of your goals, costs and next steps with our free financial planning template. Email us to request your copy and the Accountstar team will send it directly to you."
        image={{ src: "/images/resources-hero.jpg", alt: "Financial planning" }}
        buttons={[{ title: "Request by email", url: TEMPLATE_EMAIL }]}
      />
    </>
  );
}
