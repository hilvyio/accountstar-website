import { Header81 } from "@/components/relume/Header81";

export function NotFoundPage() {
  return (
    <Header81
      compact
      heading="Page not found"
      description="That page does not exist. Head back to the homepage or get in touch."
      buttons={[
        { title: "Home", url: "/" },
        { title: "Contact us", url: "/contact-us", variant: "gold" },
      ]}
      image={{ src: "/images/stella-hero.jpg", alt: "Stella Ezeogu" }}
    />
  );
}
