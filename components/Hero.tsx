import { TechIconGrid } from "./TechIcon";
import Image from "next/image";
import { Reveal, RevealContainer } from "./animation/Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src={"/images/background.png"}
          alt="Abstract tech background"
          fill
          className="object-cover opacity-97"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-bg/30 to-bg" />
      </div>
      <div className="mx-auto container-max px-4 pt-36 pb-20 sm:pt-40 sm:pb-28">
        <RevealContainer immediate stagger={0.08}>
          <Reveal
            as="h1"
            immediate
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-semibold tracking-tight"
          >
            DAMJAN ZIMBAKOV
          </Reveal>
          <Reveal
            immediate
            delay={0.05}
            as="p"
            className="mt-6 sm:mt-8 mb-16 sm:mb-24 text-base sm:text-xl font-mono text-text-primary font-semibold uppercase"
          >
            CS STUDENT | MOBILE APP DEVELOPER | ML ENTHUSIAST
          </Reveal>
          <Reveal immediate delay={0.1} className="mt-10 mb-8">
            <TechIconGrid />
          </Reveal>
        </RevealContainer>
      </div>
    </section>
  );
}
