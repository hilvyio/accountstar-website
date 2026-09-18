"use client";

import { useState, type ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, type ButtonProps } from "@/components/ui/button";
import { KeyboardArrowDown } from "relume-icons";


type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar1Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar1 = (props: Navbar1Props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar1Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section className="z-[999] flex w-full items-center border-b border-brand-500/30 bg-scheme-background min-[992px]:min-h-18 min-[992px]:px-[5%]">
      <div className="size-full min-[992px]:flex min-[992px]:items-center min-[992px]:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 min-[992px]:min-h-full min-[992px]:px-0">
          <a href={logo.url} className="inline-flex max-w-[10rem]">
            <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center min-[992px]:hidden"
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-brand-500"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-brand-500"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-brand-500"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] min-[992px]:flex min-[992px]:items-center min-[992px]:overflow-visible min-[992px]:px-0 min-[992px]:[--height-closed:auto] min-[992px]:[--height-open:auto]"
        >
          {navLinks.map((navLink, index) =>
            navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
              <SubMenu
                key={index}
                navLink={navLink}
                isMobile={isMobile}
                onNavigate={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <a
                key={index}
                href={navLink.url}
                className="block py-3 text-base first:pt-7 min-[992px]:px-4 min-[992px]:py-2 first:min-[992px]:pt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navLink.title}
              </a>
            ),
          )}
          <div className="mt-6 flex flex-col items-center gap-4 min-[992px]:mt-0 min-[992px]:ml-4 min-[992px]:flex-row">
            {buttons.map((button, index) => (
              <Button key={index} {...button} className="w-full min-[992px]:w-auto">
                {button.title}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  onNavigate,
}: {
  navLink: NavLink;
  isMobile: boolean;
  onNavigate: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isMobile) {
    return (
      <div className="group relative">
        <a
          href={navLink.url}
          className="flex items-center gap-1 px-4 py-2 text-base"
        >
          <span>{navLink.title}</span>
          <KeyboardArrowDown className="text-brand-500" />
        </a>
        <div className="invisible absolute left-0 z-50 min-w-52 rounded-sm border border-brand-500/40 bg-white py-2 opacity-0 shadow-[0_12px_30px_rgb(125_91_166_/_18%)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          {navLink.subMenuLinks?.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className="block px-4 py-2 text-base hover:bg-purple-50 hover:text-brand-500"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-2 py-3 text-left text-base"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <KeyboardArrowDown className={`text-brand-500 ${isDropdownOpen ? "rotate-180" : ""}`} />
      </button>
      {isDropdownOpen
        ? navLink.subMenuLinks?.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className="block py-3 pl-[5%] text-base"
              onClick={onNavigate}
            >
              {item.title}
            </a>
          ))
        : null}
    </div>
  );
};

export const Navbar1Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      subMenuLinks: [
        { title: "Link Five", url: "#" },
        { title: "Link Six", url: "#" },
        { title: "Link Seven", url: "#" },
      ],
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      size: "sm",
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
