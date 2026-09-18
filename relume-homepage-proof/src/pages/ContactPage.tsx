import { Header81 } from "@/components/relume/Header81";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CALENDLY, EMAIL, WHATSAPP } from "@/content";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="mb-5 h-12 w-12 text-brand-500" fill="none" aria-hidden>
      <rect x="6" y="10" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 18h36M16 6v8M32 6v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="28" r="2" fill="currentColor" />
      <circle cx="24" cy="28" r="2" fill="currentColor" />
      <circle cx="30" cy="28" r="2" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 48 48" className="mb-5 h-12 w-12 text-brand-500" fill="none" aria-hidden>
      <rect x="6" y="12" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8 14l16 12L40 14" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 48 48" className="mb-5 h-12 w-12 text-brand-500" fill="none" aria-hidden>
      <path
        d="M24 8c-8.8 0-16 7.2-16 16 0 2.8.7 5.5 2.1 7.9L8 40l8.3-2.2A16 16 0 1 0 24 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M18 20c.4 4 3.6 7.8 8 8.4.6.1 1.2-.3 1.4-.8l.8-2.2c.2-.5 0-1-.4-1.2l-2.2-1.1c-.5-.2-1.1 0-1.4.4l-.6.8c-2.2-1-3.6-2.6-4.2-4.6l.8-.6c.4-.3.6-.9.4-1.4L19 16.5c-.3-.5-.8-.7-1.3-.5l-2.1.8c-.6.2-1 .8-.8 1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

const options = [
  {
    eyebrow: "15 minutes",
    title: "Book a free chat",
    text: "Choose a convenient time for a quick conversation with Stella about what you need.",
    label: "Choose a time",
    href: CALENDLY,
    icon: <CalendarIcon />,
  },
  {
    eyebrow: "Email",
    title: "Send an enquiry",
    text: "Tell us about your business, organisation or event and we will reply with the next steps.",
    label: "Email Accountstar",
    href: EMAIL,
    icon: <MailIcon />,
  },
  {
    eyebrow: "WhatsApp",
    title: "Message us",
    text: "Prefer a short message? Start a WhatsApp conversation with the Accountstar team.",
    label: "Open WhatsApp",
    href: WHATSAPP,
    icon: <WhatsAppIcon />,
  },
];

export function ContactPage() {
  return (
    <>
      <Header81
        compact
        heading="Let's talk about what you need"
        description="Choose the contact option that suits you. Tell us a little about your business, organisation or event and we will help you find the right next step."
        buttons={[
          { title: "Book a free chat", url: CALENDLY, variant: "gold" },
          { title: "Email us", url: EMAIL, variant: "secondary" },
        ]}
        image={{ src: "/images/stella-hero.jpg", alt: "Stella Ezeogu" }}
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container grid gap-6 md:grid-cols-3">
          {options.map((option) => (
            <Card key={option.title} className="flex flex-col p-6">
              {option.icon}
              <p className="mb-2 text-small font-semibold text-brand-500">{option.eyebrow}</p>
              <h2 className="mb-3 text-h4 font-bold">{option.title}</h2>
              <p className="mb-6 flex-1">{option.text}</p>
              <Button url={option.href}>{option.label}</Button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
