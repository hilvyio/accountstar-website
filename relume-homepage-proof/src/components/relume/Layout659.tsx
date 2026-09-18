import type { ComponentPropsWithoutRef } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  reverse?: boolean;
};

export type Layout659Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout659 = (props: Layout659Props) => {
  const { tagline, heading, description, buttons, image, reverse, className, ...rest } = {
    ...Layout659Defaults,
    ...props,
  };
  return (
    <section
      className={["px-[5%] py-16 md:py-24 lg:py-28", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <div className="container">
        <Card className="grid auto-cols-fr grid-cols-1 md:grid-cols-2">
          <div
            className={[
              "flex min-h-[22rem] items-center justify-center md:min-h-[34rem]",
              reverse ? "md:order-2" : "",
            ].join(" ")}
          >
            <img src={image.src} className="size-full object-cover object-top" alt={image.alt} />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            {tagline ? (
              <p className="mb-2 inline-block text-small font-semibold text-brand-500">{tagline}</p>
            ) : null}
            <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
            {description ? <p className="text-medium">{description}</p> : null}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export const Layout659Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight className="text-scheme-text" />,
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  reverse: false,
};
