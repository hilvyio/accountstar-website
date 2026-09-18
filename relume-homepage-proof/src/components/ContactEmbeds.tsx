import { CALENDLY, EMAIL, MISSION, WHATSAPP } from "@/content";
import { Button } from "@/components/ui/button";

export function ContactEmbeds() {
  return (
    <section className="border-t border-brand-500/30 bg-white">
      <div className="px-[5%] py-16 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-h2 font-bold">Get in touch with us.</h2>
            <p className="mb-8 max-w-xl text-medium">{MISSION}</p>
            <div className="flex flex-wrap gap-4">
              <Button url={WHATSAPP} title="WhatsApp us" />
              <Button url={EMAIL} title="Email us" variant="secondary" />
            </div>
          </div>
          <div className="min-h-[40rem] overflow-hidden border border-brand-500/30 bg-[#f7f4fb]">
            <iframe
              title="Book a free 15-minute chat with Accountstar"
              src="https://calendly.com/stella_e/15min?embed_type=Inline&hide_gdpr_banner=1"
              className="min-h-[40rem] w-full border-0"
              loading="lazy"
            />
            <div className="p-4 text-center">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand-500 hover:underline"
              >
                Open booking calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
