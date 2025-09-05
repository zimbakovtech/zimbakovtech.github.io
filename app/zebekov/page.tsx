import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Reveal, RevealContainer } from "../../components/animation/Reveal";
import Image from "next/image";
import TechBadge from "../../components/TechBadge";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Server,
  Shield,
  Layers,
} from "lucide-react";

export default function ZebekovPage() {
  const features = [
    "Modern, responsive public website with multilingual support",
    "FastAPI backend with RESTful API architecture",
    "PostgreSQL database for reliable data management",
    "Secure admin dashboard for doctors and clinic staff",
    "Advanced appointment scheduling system",
    "Complete CI/CD pipeline for automated deployments",
    "Dockerized application deployment",
    "Nginx reverse proxy configuration",
  ];
  const techStack = [
    "Next.js",
    "React",
    "TailwindCSS",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Docker",
    "Nginx",
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
              href="https://www.zebekov.mk/en"
              target="_blank"
              className="underline inline-flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> Visit Zebekov.mk{" "}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <RevealContainer as="div" className="text-center mb-10">
          <Reveal as="h1" className="text-4xl md:text-5xl font-bold">
            Dental Center Zebekov
          </Reveal>
          <Reveal
            as="p"
            className="text-xl text-text-secondary max-w-3xl mx-auto mt-3"
          >
            A comprehensive web application and backend system for Dental Center
            Zebekov, featuring a modern public website, robust API
            infrastructure, and a secure administrative dashboard.
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
                src="/images/zebekov/website_laptop.png"
                alt="Zebekov website on laptop"
                fill
                sizes="(min-width: 1024px) 704px, (min-width: 768px) 95vw, 96vw"
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Phone overlapping on the left (nudged closer to edge) */}
            <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-36 sm:w-40 md:w-44 aspect-[544/1080] -rotate-6 drop-shadow-2xl z-10">
              <Image
                src="/images/zebekov/website_iphone.png"
                alt="Zebekov website on iPhone"
                fill
                sizes="(min-width: 768px) 176px, (min-width: 640px) 160px, 144px"
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
                src="/images/zebekov/admin_laptop.png"
                alt="Zebekov admin dashboard on laptop"
                fill
                sizes="(min-width: 1024px) 704px, (min-width: 768px) 95vw, 96vw"
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Phone overlapping on the right (nudged closer to edge) */}
            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-36 sm:w-40 md:w-44 aspect-[544/1080] rotate-6 drop-shadow-2xl z-10">
              <Image
                src="/images/zebekov/admin_iphone.png"
                alt="Zebekov admin dashboard on iPhone"
                fill
                sizes="(min-width: 768px) 176px, (min-width: 640px) 160px, 144px"
                className="object-contain"
              />
            </div>
          </div>
        </RevealContainer>

        {/* Tech badges */}
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

        <RevealContainer as="div" className="grid md:grid-cols-2 gap-12">
          <div>
            <Reveal as="h2" className="text-2xl font-semibold">
              Project Overview
            </Reveal>
            <Reveal as="p" className="text-text-secondary mt-3">
              Dental Center Zebekov required a complete digital transformation
              to modernize their patient management and online presence. I
              developed a full-stack solution that includes a professional
              public website, a robust backend API, and a comprehensive
              administrative system for managing appointments and clinic
              operations.
            </Reveal>
            <Reveal as="p" className="text-text-secondary mt-3">
              The system was built with scalability and security in mind,
              implementing modern web technologies and DevOps practices to
              ensure reliable performance and easy maintenance.
            </Reveal>
          </div>
          <div>
            <Reveal as="h2" className="text-2xl font-semibold">
              Key Features & Implementation
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
          <h2 className="text-2xl font-semibold">
            Technical Architecture & DevOps
          </h2>
          <p className="text-text-secondary mt-3">
            The frontend and backend are cleanly separated. The FastAPI backend
            provides REST endpoints and handles authentication and business
            logic while PostgreSQL persists data. Deployments are containerized
            and served behind Nginx with SSL termination.
          </p>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
