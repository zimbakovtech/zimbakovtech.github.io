import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Reveal, RevealContainer } from "../../components/animation/Reveal";
import Image from "next/image";
import TechBadge from "../../components/TechBadge";
import { ArrowLeft, ExternalLink, Smartphone, Globe } from "lucide-react";

export default function HubbyPage() {
  const features = [
    "Production Flutter app for iOS & Android across 23 locales and 3 build flavors",
    "Clean, layered architecture with Riverpod, GoRouter, and Freezed",
    "Full Firebase stack — Auth, Firestore, Cloud Functions, Remote Config, Crashlytics, Analytics",
    "Stripe payments and monetization flows with A/B experiments",
    "CI/CD quality gates and Shorebird over-the-air patches",
    "Stability and behavior monitoring via Crashlytics and PostHog",
  ];
  const techStack = [
    "Flutter",
    "Dart",
    "Firebase",
    "Git",
  ];

  return (
    <main>
      <Header />
      <section className="pt-28 mx-auto container-max px-4">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-text-secondary hover:text-text-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <Reveal as="div">
            <Link
              href="https://www.hubbyesim.com/"
              target="_blank"
              className="underline inline-flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> Visit Hubby eSIM{" "}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <RevealContainer as="div" className="text-center mb-10">
          <Reveal as="h1" className="text-4xl md:text-5xl font-bold">
            Hubby eSIM
          </Reveal>
          <Reveal
            as="p"
            className="text-xl text-text-secondary max-w-3xl mx-auto mt-3"
          >
            Lead Mobile Engineer for Hubby&apos;s Flutter eSIM app — a production
            consumer app on iOS &amp; Android serving 500,000+ annual users
            across 23 locales, shipped continuously through 3 build flavors.
          </Reveal>
        </RevealContainer>

        <RevealContainer
          as="div"
          className="grid md:grid-cols-2 gap-6 mb-12"
          stagger={0.1}
        >
          {/* Mobile app mockups */}
          <div className="relative rounded-xl bg-surface/60 border border-white/5 p-8 overflow-hidden h-[420px] sm:h-[500px]">
            <Smartphone className="w-8 h-8 text-text-secondary absolute top-4 left-4" />
            <span className="sr-only">iPhone &amp; Android App</span>

            {/* Centered mobile app pair */}
            <div className="absolute inset-0 flex items-center justify-center gap-6">
              {/* First iPhone (angled left) */}
              <div className="relative w-36 sm:w-44 md:w-48 aspect-[544/1080] -rotate-6 drop-shadow-2xl">
                <Image
                  src="/images/hubby/mobile_iphone.png"
                  alt="Hubby eSIM app screenshot"
                  fill
                  sizes="(min-width: 768px) 192px, (min-width: 640px) 176px, 144px"
                  className="object-contain"
                  priority
                />
              </div>
              {/* Second iPhone (angled right) */}
              <div className="relative w-36 sm:w-44 md:w-48 aspect-[544/1080] rotate-6 drop-shadow-2xl">
                <Image
                  src="/images/hubby/mobile_iphone2.png"
                  alt="Hubby eSIM app screenshot 2"
                  fill
                  sizes="(min-width: 768px) 192px, (min-width: 640px) 176px, 144px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Website mockup */}
          <div className="relative rounded-xl bg-surface/60 border border-white/5 p-6 overflow-hidden h-[420px] sm:h-[500px]">
            <Globe className="w-8 h-8 text-text-secondary absolute top-4 left-4" />
            <span className="sr-only">Marketing Website</span>

            {/* Laptop screenshot (centered) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[704px] aspect-[1200/780] z-0">
              <Image
                src="/images/hubby/website_laptop.png"
                alt="Hubby eSIM website on laptop"
                fill
                sizes="(min-width: 1024px) 704px, (min-width: 768px) 95vw, 96vw"
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </RevealContainer>

        <RevealContainer
          as="div"
          className="flex flex-wrap justify-center gap-3 mb-10"
          stagger={0.05}
        >
          {techStack.map((tech) => (
            <Reveal as="span" key={tech}>
              <TechBadge name={tech} size="lg" />
            </Reveal>
          ))}
        </RevealContainer>

        <RevealContainer as="div" className="grid md:grid-cols-2 gap-10">
          <div>
            <Reveal as="h2" className="text-2xl font-semibold">
              Project Overview
            </Reveal>
            <Reveal as="p" className="text-text-secondary mt-3">
              Hubby eSIM is a production consumer app that lets travellers buy
              and manage data plans anywhere in the world. I own the mobile
              codebase end-to-end after stepping up from an IC role —
              architecture, code quality, release engineering, and technical
              direction across 22 feature modules.
            </Reveal>
            <Reveal as="p" className="text-text-secondary mt-3">
              The app is built on a clean, layered Flutter architecture
              (Riverpod, GoRouter, Freezed) over a full Firebase stack with
              Stripe payments, shipped continuously through CI/CD quality gates
              and Shorebird over-the-air patches.
            </Reveal>
          </div>
          <div>
            <Reveal as="h2" className="text-2xl font-semibold">
              Key Features &amp; Responsibilities
            </Reveal>
            <ul className="mt-3 space-y-2 text-text-secondary">
              {features.map((f, i) => (
                <Reveal as="li" key={i} className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-secondary mt-2" />{" "}
                  {f}
                </Reveal>
              ))}
            </ul>
          </div>
        </RevealContainer>

        <Reveal
          as="div"
          className="mt-12 rounded-2xl bg-surface/60 border border-white/5 p-6"
        >
          <h2 className="text-xl font-semibold">Engineering Leadership</h2>
          <p className="text-text-secondary mt-2">
            Set and enforce team engineering standards — layered architecture,
            automated CI gates, and analytics/crash-reporting conventions. Run
            A/B experiments and monetization flows, and monitor stability and
            user behavior through Crashlytics and PostHog to guide technical
            direction.
          </p>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
