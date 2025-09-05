"use client";
import { ReactNode } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

type CommonProps = {
  children: ReactNode;
  className?: string;
  /** Delay (seconds) applied to this element or to children via delayChildren */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Once: animate only the first time it enters the viewport */
  once?: boolean;
  /** If true, animates on mount immediately (good for above-the-fold). If false, animates when in view. */
  immediate?: boolean;
};

type Direction = "up" | "down" | "left" | "right" | "none";

function getVariants(
  dir: Direction,
  y: number,
  x: number,
  duration: number,
  delay: number,
  reduced: boolean
): Variants {
  const offsetY = dir === "up" ? y : dir === "down" ? -y : 0;
  const offsetX = dir === "left" ? x : dir === "right" ? -x : 0;
  if (reduced) {
    // Respect prefers-reduced-motion: no movement, minimal fade
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: Math.min(0.2, duration), delay: 0 },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: offsetY, x: offsetX },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, ease: "easeOut", delay },
    },
  };
}

const TAGS = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  footer: motion.footer,
  nav: motion.nav,
  main: motion.main,
  article: motion.article,
  aside: motion.aside,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
  ul: motion.ul,
  li: motion.li,
  a: motion.a,
  img: motion.img,
} as const;
type Tag = keyof typeof TAGS;

type RevealProps = CommonProps & {
  direction?: Direction;
  /** Pixel offset for Y-axis translation on enter */
  y?: number;
  /** Pixel offset for X-axis translation on enter */
  x?: number;
  as?: Tag; // semantic element (restricted set for typing)
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.45,
  once = true,
  immediate = false,
  direction = "up",
  y = 16,
  x = 12,
  as = "div",
  ...rest
}: RevealProps & Record<string, any>) {
  const reduced = !!useReducedMotion();
  const variants = getVariants(direction, y, x, duration, delay, reduced);
  const Comp = (TAGS[as] ?? TAGS.div) as any;

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      animate={immediate ? "show" : undefined}
      whileInView={immediate ? undefined : "show"}
      viewport={immediate ? undefined : { once, amount: 0.2 }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

type RevealContainerProps = CommonProps & {
  /** Stagger children by this many seconds */
  stagger?: number;
  /** Optional delay before the group starts */
  delayChildren?: number;
  as?: Tag;
};

export function RevealContainer({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  delayChildren,
  duration = 0.45,
  once = true,
  immediate = false,
  as = "div",
  ...rest
}: RevealContainerProps & Record<string, any>) {
  const reduced = !!useReducedMotion();
  const Comp = (TAGS[as] ?? TAGS.div) as any;

  const variants: Variants = reduced
    ? {
        hidden: { opacity: 1 },
        show: { opacity: 1 },
      }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delayChildren ?? delay,
            ease: "easeOut",
            duration,
          },
        },
      };

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      animate={immediate ? "show" : undefined}
      whileInView={immediate ? undefined : "show"}
      viewport={immediate ? undefined : { once, amount: 0.15 }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

// Convenience preconfigured wrappers
export const FadeInUp = (props: Omit<RevealProps, "direction">) => (
  <Reveal direction="up" {...props} />
);
export const FadeIn = (props: Omit<RevealProps, "direction">) => (
  <Reveal direction="none" y={0} x={0} {...props} />
);
