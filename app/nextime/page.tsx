import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Reveal, RevealContainer } from "../../components/animation/Reveal";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Smartphone,
  Globe,
  Settings,
} from "lucide-react";

export default function NextimePage() {
  const features = [
    "Cross-platform Flutter development for Android & iOS",
    "Firebase Authentication and real-time synchronization",
    "Push and in-app notification systems",
    "Advanced calendar syncing capabilities",
    "Scalable state management architecture",
    "Analytics tracking and performance optimization",
  ];
  const techStack = [
    "Flutter",
    "Dart",
    "Firebase",
    "Next.js",
    "React",
    "TailwindCSS",
    "Vite",
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
              href="https://nextime.mk/"
              target="_blank"
              className="underline inline-flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> Visit NexTime.mk{" "}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <RevealContainer as="div" className="text-center mb-10">
          <Reveal as="h1" className="text-4xl md:text-5xl font-bold">
            NexTime
          </Reveal>
          <Reveal
            as="p"
            className="text-xl text-text-secondary max-w-3xl mx-auto mt-3"
          >
            Mobile App Developer for a start-up (NexTime MK). Led the
            development of a comprehensive cross-platform appointment scheduling
            solution with web and mobile components.
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
            <span className="sr-only">iPhone & Android App</span>

            {/* Centered mobile app pair */}
            <div className="absolute inset-0 flex items-center justify-center gap-6">
              {/* First iPhone (angled left) */}
              <div className="relative w-36 sm:w-44 md:w-48 aspect-[544/1080] -rotate-6 drop-shadow-2xl">
                <Image
                  src="/images/nextime/mobile_iphone.png"
                  alt="NexTime mobile app screenshot"
                  fill
                  sizes="(min-width: 768px) 192px, (min-width: 640px) 176px, 144px"
                  className="object-contain"
                  priority
                />
              </div>
              {/* Second iPhone (angled right) */}
              <div className="relative w-36 sm:w-44 md:w-48 aspect-[544/1080] rotate-6 drop-shadow-2xl">
                <Image
                  src="/images/nextime/mobile_iphone2.png"
                  alt="NexTime mobile app screenshot 2"
                  fill
                  sizes="(min-width: 768px) 192px, (min-width: 640px) 176px, 144px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Web app mockups */}
          <div className="relative rounded-xl bg-surface/60 border border-white/5 p-8 overflow-hidden h-[420px] sm:h-[500px]">
            <Globe className="w-8 h-8 text-text-secondary absolute top-4 left-4" />
            <span className="sr-only">Web Application</span>

            {/* Laptop screenshot (base, centered vertically & horizontally) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[672px] aspect-[1200/780] z-0">
              <Image
                src="/images/nextime/web_laptop.png"
                alt="NexTime web app on laptop"
                fill
                sizes="(min-width: 1024px) 672px, (min-width: 768px) 90vw, 92vw"
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* iPhone web screenshot overlapping on right (centered vertically) */}
            <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 w-36 sm:w-40 md:w-44 aspect-[544/1080] rotate-6 drop-shadow-2xl z-10">
              <Image
                src="/images/nextime/web_iphone.png"
                alt="NexTime web app on iPhone"
                fill
                sizes="(min-width: 768px) 176px, (min-width: 640px) 160px, 144px"
                className="object-contain"
              />
            </div>
          </div>
        </RevealContainer>

        <RevealContainer
          as="div"
          className="flex flex-wrap justify-center gap-2 mb-10"
          stagger={0.04}
        >
          {techStack.map((tech) => (
            <Reveal
              as="span"
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-text-secondary"
            >
              {tech}
            </Reveal>
          ))}
        </RevealContainer>

        <RevealContainer as="div" className="grid md:grid-cols-2 gap-10">
          <div>
            <Reveal as="h2" className="text-2xl font-semibold">
              Project Overview
            </Reveal>
            <Reveal as="p" className="text-text-secondary mt-3">
              NexTime is a comprehensive appointment scheduling platform I
              developed as the lead mobile developer for NexTime MK. The project
              encompasses a cross-platform mobile application, a public
              marketing website, and a sophisticated web-based scheduling
              application.
            </Reveal>
            <Reveal as="p" className="text-text-secondary mt-3">
              The mobile app was built using Flutter for both iOS and Android,
              and the web components use React and Next.js for modern UX and SEO
              performance.
            </Reveal>
          </div>
          <div>
            <Reveal as="h2" className="text-2xl font-semibold">
              Key Features & Achievements
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
          <h2 className="text-xl font-semibold">My Role & Responsibilities</h2>
          <p className="text-text-secondary mt-2">
            Led the mobile application development lifecycle, including
            architecture, Firebase integration for auth and real-time sync, UI
            design and implementation, and performance optimization;
            collaborated with web team for platform consistency.
          </p>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
