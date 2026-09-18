import type { ComponentPropsWithoutRef } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  image?: ImageProps;
  quote: string;
  avatar?: ImageProps;
  name: string;
  position: string;
  companyName: string;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial3Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial3 = (props: Testimonial3Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial3Defaults,
    ...props,
  };
  return (
    <section id="reviews" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
          {description ? <p className="text-medium">{description}</p> : null}
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex h-full flex-col justify-between text-center">
              <div>
                {testimonial.image ? (
                  <div className="mb-6 inline-block md:mb-8">
                    <img
                      src={testimonial.image.src}
                      alt={testimonial.image.alt}
                      className="max-h-14"
                    />
                  </div>
                ) : null}
                <blockquote className="text-h6 font-bold">{testimonial.quote}</blockquote>
              </div>
              <div>
                <div className="mt-8 flex flex-col items-center justify-center">
                  {testimonial.avatar ? (
                    <div className="mx-auto mb-3 size-14 min-h-14 min-w-14 overflow-hidden rounded-full md:mb-4">
                      <img
                        src={testimonial.avatar.src}
                        alt={testimonial.avatar.alt}
                        className="size-full object-cover"
                      />
                    </div>
                  ) : null}
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>
                    <span>{testimonial.position}</span>
                    {testimonial.companyName ? (
                      <>
                        , <span>{testimonial.companyName}</span>
                      </>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial3Defaults: Props = {
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
    },
  ],
};
