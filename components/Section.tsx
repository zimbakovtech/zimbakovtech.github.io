import { ReactNode } from "react";
import { Reveal } from "./animation/Reveal";

export default function Section({
  id,
  title,
  children,
  className = "",
}: {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto container-max px-4 py-8 sm:py-12 ${className}`}
    >
      {title && (
        <Reveal as="h2" className="text-2xl sm:text-3xl font-semibold mb-8">
          {title}
        </Reveal>
      )}
      <div>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
