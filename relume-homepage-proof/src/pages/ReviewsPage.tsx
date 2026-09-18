import { Header81 } from "@/components/relume/Header81";
import { Testimonial3 } from "@/components/relume/Testimonial3";
import { testimonials } from "@/content";

export function ReviewsPage() {
  return (
    <>
      <Header81
        compact
        heading="Reviews from customers"
        description="See how clear advice, careful attention and practical support have helped Accountstar clients."
        buttons={[{ title: "Work with Accountstar", url: "/contact-us" }]}
        image={{ src: "/images/reviews-hero.png", alt: "Stella Ezeogu" }}
      />
      <Testimonial3
        heading="What clients say"
        description=""
        testimonials={testimonials}
      />
    </>
  );
}
