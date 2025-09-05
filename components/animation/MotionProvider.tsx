"use client";
import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

export default function MotionProvider({ children }: { children: ReactNode }) {
  // domAnimation is the lightest featureset; switches to reduced motion automatically
  return (
    <LazyMotion features={domAnimation} strict>
      {/* Configure global viewport defaults via CSS; components can override with viewport prop */}
      {children}
    </LazyMotion>
  );
}
