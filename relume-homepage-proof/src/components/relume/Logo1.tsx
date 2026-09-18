import type { ComponentPropsWithoutRef } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo1Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Logo1 = (props: Logo1Props) => {
  const { heading, logos } = {
    ...Logo1Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mx-auto mb-6 w-full max-w-lg text-center text-h6 font-bold md:mb-8">
          {heading}
        </h2>
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-8 pt-4 pb-2 md:grid-cols-4 md:gap-x-12 md:pt-2">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto max-w-[11rem] object-contain md:h-24 md:max-w-[14rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Logo1Defaults: Props = {
  heading: "Used by the world's leading companies",
  logos: [
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Relume logo 1" },
  ],
};
