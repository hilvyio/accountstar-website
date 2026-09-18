import { Fragment, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight, RelumeIcon } from "relume-icons";

type ListItem = {
  icon: ReactNode;
  heading: string;
  description: string;
  url?: string;
};

type Props = {
  tagline: string;
  heading: ReactNode;
  description: string;
  listItems: ListItem[];
  buttons: ButtonProps[];
};

export type Layout620Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout620 = (props: Layout620Props) => {
  const { tagline, heading, description, listItems, buttons, className, ...rest } = {
    ...Layout620Defaults,
    ...props,
  };

  return (
    <section
      className={["bg-brand-500 px-[5%] py-16 text-white md:py-24 lg:py-28", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          {tagline ? <p className="mb-3 font-semibold md:mb-4">{tagline}</p> : null}
          <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
          {description ? <p className="text-medium text-white/80">{description}</p> : null}
        </div>

        <div className="grid grid-cols-1 border-t border-white/30 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-8">
          {listItems.map((item, index) => (
            <Fragment key={index}>
              <div className="border-b border-white/30 py-6 last:border-b-0 md:border-b-0 md:py-8">
                <div className="mb-6 flex md:mb-8">{item.icon}</div>
                <h3 className="mb-5 text-h4 font-bold md:mb-6">
                  {item.url ? (
                    <a href={item.url} className="hover:underline">
                      {item.heading}
                    </a>
                  ) : (
                    item.heading
                  )}
                </h3>
                <p className="text-white/80">{item.description}</p>
                {item.url ? (
                  <a href={item.url} className="mt-4 inline-block font-semibold hover:underline">
                    Learn more →
                  </a>
                ) : null}
              </div>
              {index < listItems.length - 1 && (
                <div className="hidden h-full w-px bg-white/30 md:block" />
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 md:mt-10 lg:mt-12">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout620Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  listItems: [
    {
      icon: <RelumeIcon className="size-12" />,
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: <RelumeIcon className="size-12" />,
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      icon: <RelumeIcon className="size-12" />,
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
    },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight className="text-scheme-text" />,
    },
  ],
};
