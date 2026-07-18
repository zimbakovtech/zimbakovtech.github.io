import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Reveal, RevealContainer } from "../../components/animation/Reveal";
import Image from "next/image";
import TechBadge from "../../components/TechBadge";
import {
  ArrowLeft,
  ExternalLink,
  Smartphone,
  Globe,
  Github,
} from "lucide-react";

export default function CityBusPage() {
  const features = [
    "GTFS-modeled transit data for Skopje's bus network on PostgreSQL + PostGIS",
    "Journey planning via a Connection Scan Algorithm with transfer awareness",
    "Real-time vehicle tracking over WebSockets (~2s updates) with REST fallback",
    "KNN stop-proximity search, trigram text search, and GiST-indexed geometries",
    "Flutter client with flutter_map / OpenStreetMap and Riverpod state management",
    "Dockerized FastAPI backend with SQLAlchemy 2 (async), Alembic, and CI tests",
  ];
  const techStack = [
    "Flutter",
    "Dart",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Docker",
    "Git",
  ];

  return (
    <main>
      <Header />
      <section className="pt-28 mx-auto container-max px-4">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="text-text-secondary hover:text-text-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <Reveal as="div" className="flex items-center gap-5">
            <Link
              href="https://github.com/zimbakovtech/citybus-app"
              target="_blank"
              className="underline inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> Source
            </Link>
            <Link
              href="https://citybus.zimbakov.dev/"
              target="_blank"
              className="underline inline-flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> Live Site{" "}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <RevealContainer as="div" className="text-center mb-10">
          <Reveal as="h1" className="text-4xl md:text-5xl font-bold">
            CityBus
          </Reveal>
          <Reveal
            as="p"
            className="text-xl text-text-secondary max-w-3xl mx-auto mt-3"
          >
            A full-stack public transit platform — a Flutter app over a FastAPI
            and PostgreSQL/PostGIS backend, with realistic GTFS data modeling,
            route planning, and real-time vehicle tracking.
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
            <span className="sr-only">Flutter Mobile App</span>

            {/* Centered mobile app pair */}
            <div className="absolute inset-0 flex items-center justify-center gap-6">
              {/* First iPhone (angled left) */}
              <div className="relative w-36 sm:w-44 md:w-48 aspect-[544/1080] -rotate-6 drop-shadow-2xl">
                <Image
                  src="/images/citybus/mobile_iphone.png"
                  alt="CityBus app screenshot"
                  fill
                  sizes="(min-width: 768px) 192px, (min-width: 640px) 176px, 144px"
                  className="object-contain"
                  priority
                />
              </div>
              {/* Second iPhone (angled right) */}
              <div className="relative w-36 sm:w-44 md:w-48 aspect-[544/1080] rotate-6 drop-shadow-2xl">
                <Image
                  src="/images/citybus/mobile_iphone2.png"
                  alt="CityBus app screenshot 2"
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
            <span className="sr-only">Web App</span>

            {/* Laptop screenshot (centered) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[704px] aspect-[1200/780] z-0">
              <Image
                src="/images/citybus/website_laptop.png"
                alt="CityBus web app on laptop"
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
              CityBus is a production-like transit system built as a databases
              course final project, with the data model as the core deliverable.
              It models real-world GTFS data for Skopje&apos;s bus network to
              power journey planning and live vehicle tracking.
            </Reveal>
            <Reveal as="p" className="text-text-secondary mt-3">
              The stack pairs a Flutter client (Riverpod, GoRouter, Dio,
              flutter_map) with an async FastAPI backend on PostgreSQL 16 +
              PostGIS 3.5, all orchestrated with Docker Compose and covered by a
              CI test suite.
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
          <h2 className="text-xl font-semibold">Database &amp; Architecture</h2>
          <p className="text-text-secondary mt-2">
            The schema uses <code>stop_times</code> as its finest grain — one
            row per scheduled (trip, stop) event — with surrogate bigint keys
            alongside preserved GTFS natural keys, and an <code>interval</code>{" "}
            type to handle after-midnight service. The planner runs a Connection
            Scan Algorithm over pre-computed connections with 120s transfer
            buffers, while a background simulator interpolates vehicle positions
            and broadcasts them to WebSocket clients.
          </p>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
