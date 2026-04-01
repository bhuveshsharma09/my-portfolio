"use client";

import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";

type FadeInStaggerProps = {
  children: React.ReactNode;
  className?: string;
};

export function FadeInStagger({ children, className }: FadeInStaggerProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-5% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
      className={cn(className)}
    >
      {items.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

