"use client";

import { useState, type ComponentPropsWithoutRef } from "react";
import { Close } from "relume-icons";

type Props = {
  headingStart: string;
  link: {
    url: string;
    title: string;
  };
  headingEnd: string;
};

export type Banner5Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner5 = (props: Banner5Props) => {
  const { headingStart, link, headingEnd } = {
    ...Banner5Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="bg-brand-500 px-3 py-1.5 text-white md:px-[5%]">
      <div className="container flex items-center gap-2 text-[0.7rem] leading-snug md:justify-center md:text-small md:leading-normal">
        <p className="min-w-0 flex-1 text-center">
          {headingStart}{" "}
          <a href={link.url} className="font-semibold underline">
            {link.title}
          </a>
          {headingEnd ? ` ${headingEnd}` : null}
        </p>
        <button
          className="shrink-0 rounded-full p-0.5"
          type="button"
          aria-label="Dismiss"
          onClick={() => setIsVisible(false)}
        >
          <Close className="size-3.5 md:size-4" />
        </button>
      </div>
    </section>
  );
};

export const Banner5Defaults: Props = {
  headingStart: "Medium length banner heading",
  link: {
    url: "#",
    title: "with link",
  },
  headingEnd: "goes here",
};
