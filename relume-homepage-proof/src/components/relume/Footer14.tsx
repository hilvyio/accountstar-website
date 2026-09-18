import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: ReactNode;
};

type Props = {
  logo: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerImages: ImageProps[];
};

export type Footer14Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer14 = (props: Footer14Props) => {
  const {
    logo,
    heading,
    description,
    buttons,
    footerImages,
    columnLinks,
    socialMediaLinks,
    footerText,
  } = {
    ...Footer14Defaults,
    ...props,
  };

  const showIntro = Boolean(heading || description || buttons.length);

  return (
    <footer className="bg-brand-500 px-[5%] py-12 text-white md:py-18 lg:py-20">
      <div className="container">
        {showIntro ? (
          <>
            <div className="lg:flex lg:items-start lg:justify-between">
              <div className="max-w-lg">
                {heading ? <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2> : null}
                {description ? <p className="text-white/80">{description}</p> : null}
              </div>
              {buttons.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8 lg:mt-0">
                  {buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="py-12 md:py-18 lg:py-20">
              <div className="h-px w-full bg-white/25" />
            </div>
          </>
        ) : null}
        <div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-3">
          {columnLinks.map((column, index) => (
            <div key={index} className="flex flex-col items-start justify-start">
              <h3 className="mb-2 font-semibold">{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-small text-white/80">
                    <a href={link.url} className="flex items-center gap-3 hover:text-white hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="col-span-1 flex flex-col items-start justify-between pb-6 sm:flex-row sm:items-center md:pb-8">
          <a href={logo.url} className="mb-6 inline-block bg-white p-2 sm:mb-0">
            <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
          </a>
          {footerImages.length > 0 ? (
            <div className="ml-3 flex">
              {footerImages.map((image, index) => (
                <div
                  key={index}
                  className="-ml-3 size-12 min-h-12 min-w-12 overflow-hidden rounded-full border-2 border-brand-500"
                >
                  <img src={image.src} alt={image.alt} className="size-full object-cover" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="h-px w-full bg-white/25" />
        <div className="flex flex-col-reverse items-start gap-4 pt-6 pb-4 text-small sm:flex-row sm:items-center sm:justify-between md:pt-8 md:pb-0">
          <p className="text-white/70">{footerText}</p>
          {socialMediaLinks.length > 0 ? (
            <div className="flex items-center justify-center gap-3">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.icon}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
};

export const Footer14Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  heading: "",
  description: "",
  buttons: [],
  columnLinks: [],
  socialMediaLinks: [],
  footerText: "© 2026 Accountstar. All rights reserved.",
  footerImages: [],
};
