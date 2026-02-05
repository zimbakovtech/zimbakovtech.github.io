import { TechIconGrid } from "./TechIcon";
import Image from "next/image";
import { Reveal, RevealContainer } from "./animation/Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base image (kept), but elevated with ambient layers */}
        <Image
          src={"/images/background.png"}
          alt="Abstract tech background"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 hero-ambient animate-ambient [animation:ambient-drift_14s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-grid opacity-[0.55]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-bg/50 to-bg" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[140%] w-[70%] -translate-x-1/2 scanline opacity-40 animate-scanline [animation:scanline_6.8s_linear_infinite]" />
      </div>

      <div className="mx-auto container-max px-4 pt-32 pb-16 sm:pt-36 sm:pb-24">
        <RevealContainer immediate stagger={0.08} className="text-center">
          {/* Gradient circle (premium orb) */}
          <Reveal as="div" immediate className="relative mx-auto mt-2 h-0">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 -top-10 sm:-top-14 -translate-x-1/2 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-gradient-to-tr from-accent/35 via-white/5 to-primary/35 blur-2xl"
            />
          </Reveal>

          <Reveal
            as="h1"
            immediate
            className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-semibold tracking-tight"
          >
            Damjan
            <span className="text-accent"> Zimbakov</span>
          </Reveal>

          <Reveal
            immediate
            delay={0.05}
            as="p"
            className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            I design and ship modern apps that feel fast, look premium, and scale—from Flutter mobile experiences to AI-backed web platforms
          </Reveal>

          <Reveal
            immediate
            delay={0.08}
            as="div"
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-hover text-white px-5 py-2.5 text-sm sm:text-base font-mono transition-colors"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-text-primary px-5 py-2.5 text-sm sm:text-base font-mono transition-colors backdrop-blur-xs"
            >
              Let’s Build Something
            </a>
          </Reveal>

          <Reveal immediate delay={0.1} className="mt-12 sm:mt-14">
            <TechIconGrid />
          </Reveal>
        </RevealContainer>
      </div>
    </section>
  );
}
