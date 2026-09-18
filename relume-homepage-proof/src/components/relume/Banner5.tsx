"use client";

import { useState, type ComponentPropsWithoutRef } from "react";
import { Card } from "@/components/ui/card";
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
    <section className="px-[5%] py-2 bg-brand-500 text-white">
      <Card className="container relative flex items-center justify-start border-0 bg-transparent py-2 pl-4 pr-2 text-white md:px-4">
        <div className="mr-4 flex-1 md:ml-12 md:mr-0 md:text-center">
          <span>
            {headingStart}{" "}
            <a href={link.url} className="font-semibold underline">
              {link.title}
            </a>{" "}
            {headingEnd}
          </span>
        </div>
        <button className="md:ml-4" type="button" aria-label="Dismiss" onClick={() => setIsVisible(false)}>
          <Close className="size-8 p-1" />
        </button>
      </Card>
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
