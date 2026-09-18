import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
  objectPosition?: string;
};

type Props = {
  image: ImageProps;
  heading: ReactNode;
  description: string;
  buttons: ButtonProps[];
  compact?: boolean;
  extra?: ReactNode;
  imageFit?: "cover" | "contain";
};

export type Header81Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header81 = (props: Header81Props) => {
  const { heading, description, buttons, image, compact, extra, imageFit, className, ...rest } = {
    ...Header81Defaults,
    ...props,
  };

  return (
    <section
      className={[
        "relative grid items-center md:grid-cols-2",
        compact ? "" : "lg:min-h-[calc(100svh-6rem)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <div
        className={[
          "relative mx-[5%] max-w-xl lg:mr-16 lg:ml-[5vw] lg:justify-self-end",
          compact ? "py-10 md:py-14" : "py-16 md:py-24 lg:py-0",
        ].join(" ")}
      >
        <h1
          className={
            compact
              ? "mb-4 text-h3 font-bold md:mb-5 md:text-h2"
              : "mb-5 text-h2 font-bold md:mb-6 md:text-h1"
          }
        >
          {heading}
        </h1>
        {description ? <p className="text-medium">{description}</p> : null}
        {buttons.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        ) : null}
        {extra}
      </div>
      <div
        className={
          compact
            ? imageFit === "contain"
              ? "relative flex min-h-[28rem] items-center justify-center bg-[#f6f1ea] md:min-h-[36rem]"
              : "relative aspect-[4/5] w-full md:aspect-auto md:min-h-[36rem] lg:min-h-[42rem]"
            : "relative min-h-[28rem] w-full lg:h-[calc(100svh-6rem)] lg:min-h-full"
        }
      >
        <img
          src={image.src}
          alt={image.alt}
          className={
            imageFit === "contain"
              ? "max-h-[36rem] w-full object-contain p-4 md:max-h-[42rem]"
              : "absolute inset-0 size-full object-cover"
          }
          style={imageFit === "contain" ? undefined : { objectPosition: image.objectPosition ?? "center top" }}
        />
      </div>
    </section>
  );
};

export const Header81Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
  compact: false,
  extra: null,
  imageFit: "cover",
};
