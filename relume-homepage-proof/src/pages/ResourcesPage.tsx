import { Header81 } from "@/components/relume/Header81";
import { Button } from "@/components/ui/button";
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
      <section className="px-[5%] py-16 md:py-24">
        <div className="container max-w-3xl">
          <p className="mb-2 text-small font-semibold text-brand-500">Free download</p>
          <h2 className="mb-5 text-h2 font-bold">
            Financial plan <span className="text-brand-gold">template</span>
          </h2>
          <p className="mb-8 text-medium">
            Build a clearer view of your goals, costs and next steps with our free financial
            planning template. Email us to request your copy and the Accountstar team will send it
            directly to you.
          </p>
          <Button url={TEMPLATE_EMAIL} title="Request by email" />
        </div>
      </section>
    </>
  );
}
