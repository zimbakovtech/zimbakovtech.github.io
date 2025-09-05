import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Reveal, RevealContainer } from "../../components/animation/Reveal";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  BarChart3,
  Globe,
  Shield,
  Camera,
  Cloud,
} from "lucide-react";

export default function CourtVisionPage() {
  const techStack = [
    "Next.js",
    "React",
    "TailwindCSS",
    "Firebase",
    "Firestore",
    "Storage",
    "Git",
  ];
  const features = [
    "Scrape and store matches for predictions",
    "Shot charts, player stats, and points and ELO ratings",
    "Role-based access control and secure sharing",
    "Responsive UI with performant rendering for long timelines",
    "AI-assisted tagging (roadmapped)",
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
              href="https://court-vision.mk/"
              target="_blank"
              className="underline inline-flex items-center gap-2"
            >
              Visit Court Vision AI <ExternalLink className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <RevealContainer as="div" className="text-center mb-10">
          <Reveal as="h1" className="text-4xl md:text-5xl font-bold">
            Court Vision
          </Reveal>
          <Reveal
            as="p"
            className="text-xl text-text-secondary max-w-3xl mx-auto mt-3"
          >
            A full-stack sports predicting platform for tennis matches. Built
            with a modern web stack and cloud services to handle uploads,
            realtime data, and insightful visualizations.
          </Reveal>
        </RevealContainer>

        {/* Showcase area for images */}
        <RevealContainer
          as="div"
          className="grid md:grid-cols-2 gap-6 mb-12"
          stagger={0.1}
        >
          {/* Website card: laptop centered with phone overlapping on the left */}
          <div className="relative rounded-2xl bg-surface/60 border border-white/5 p-6 overflow-hidden h-[420px] sm:h-[500px]">
            <Globe className="w-8 h-8 text-text-secondary absolute top-4 left-4" />
            <span className="sr-only">Public Website</span>

            {/* Laptop (centered, wider by ~5%) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[704px] aspect-[1200/780] z-0">
              <Image
                src="/images/court-vision/website_laptop.png"
                alt="Court Vision website on laptop"
                fill
                sizes="(min-width: 1024px) 704px, (min-width: 768px) 95vw, 96vw"
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Phone overlapping on the left (nudged closer to edge) */}
            <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-32 sm:w-36 md:w-40 aspect-[544/1080] -rotate-6 drop-shadow-2xl z-10">
              <Image
                src="/images/court-vision/website_iphone.png"
                alt="Court Vision website on iPhone"
                fill
                sizes="(min-width: 768px) 160px, (min-width: 640px) 144px, 128px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Admin card: laptop centered with phone overlapping on the right */}
          <div className="relative rounded-2xl bg-surface/60 border border-white/5 p-6 overflow-hidden h-[420px] sm:h-[500px]">
            <Shield className="w-8 h-8 text-text-secondary absolute top-4 left-4" />
            <span className="sr-only">Admin Dashboard</span>

            {/* Laptop (centered, wider by ~5%) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[704px] aspect-[1200/780] z-0">
              <Image
                src="/images/court-vision/admin_laptop.png"
                alt="Court Vision admin dashboard on laptop"
                fill
                sizes="(min-width: 1024px) 704px, (min-width: 768px) 95vw, 96vw"
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </RevealContainer>

        {/* Tech badges */}
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

        <RevealContainer as="div" className="grid md:grid-cols-2 gap-12">
          <div>
            <Reveal as="h2" className="text-2xl font-semibold">
              Project Overview
            </Reveal>
            <Reveal as="p" className="text-text-secondary mt-3">
              Court Vision helps teams and coaches understand performance by
              capturing in-game events and delivering analytics like shot
              charts, possession breakdowns, and player impact metrics. The app
              focuses on fast data entry and readable visuals during and after
              games.
            </Reveal>
          </div>
          <div>
            <Reveal as="h2" className="text-2xl font-semibold">
              Key Features
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
          <h2 className="text-2xl font-semibold">Architecture Notes</h2>
          <p className="text-text-secondary mt-3">
            Built on Next.js for SEO-friendly static export where possible, with
            Firebase providing auth, Firestore for realtime data, and Storage
            for video assets. Data models are optimized for reads with composite
            indexes.
          </p>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
