"use client";
import React from "react";

type TechMeta = {
  label: string;
  color: string; // brand background color
  text: "light" | "dark"; // choose white/black text
  icon?: string; // local icon path
  simpleIcon?: string; // simpleicons slug for remote fallback
};

const TECHS: Record<string, TechMeta> = {
  // Web
  nextjs: {
    label: "Next.js",
    color: "#000000",
    text: "light",
    icon: "/images/tech-icons/nextjs.png",
    simpleIcon: "nextdotjs",
  },
  react: {
    label: "React",
    color: "#495558ff",
    text: "light",
    icon: "/images/tech-icons/react.png",
    simpleIcon: "react",
  },
  tailwind: {
    label: "Tailwind CSS",
    color: "#171D2C",
    text: "light",
    icon: "/images/tech-icons/tailwind.png",
    simpleIcon: "tailwindcss",
  },

  // Mobile
  flutter: {
    label: "Flutter",
    color: "#09304fff",
    text: "light",
    icon: "/images/tech-icons/flutter-icon.png",
    simpleIcon: "flutter",
  },
  dart: {
    label: "Dart",
    color: "#11344cff",
    text: "light",
    icon: "/images/tech-icons/dart.png",
    simpleIcon: "dart",
  },

  // Backend / DevOps
  fastapi: {
    label: "FastAPI",
    color: "#a7e2dcff",
    text: "dark",
    icon: "/images/tech-icons/fastapi.png",
    simpleIcon: "fastapi",
  },
  python: {
    label: "Python",
    color: "#94b1c8ff",
    text: "light",
    icon: "/images/tech-icons/python.png",
    simpleIcon: "python",
  },
  postgresql: {
    label: "PostgreSQL",
    color: "#4179e1ff",
    text: "light",
    simpleIcon: "postgresql",
  },
  docker: {
    label: "Docker",
    color: "#b6d7f0ff",
    text: "dark",
    icon: "/images/tech-icons/docker.png",
    simpleIcon: "docker",
  },
  nginx: {
    label: "Nginx",
    color: "#11542bff",
    text: "light",
    icon: "/images/tech-icons/nginx.png",
    simpleIcon: "nginx",
  },

  // Firebase & Cloud
  firebase: {
    label: "Firebase",
    color: "#9db6dfff",
    text: "dark",
    icon: "/images/tech-icons/firebase.png",
    simpleIcon: "firebase",
  },

  // General
  git: {
    label: "Git",
    color: "#252525",
    text: "light",
    icon: "/images/tech-icons/git.png",
    simpleIcon: "git",
  },
  html: {
    label: "HTML",
    color: "#823c28ff",
    text: "light",
    icon: "/images/tech-icons/html.png",
    simpleIcon: "html5",
  },
  css: {
    label: "CSS",
    color: "#214965ff",
    text: "light",
    icon: "/images/tech-icons/css.png",
    simpleIcon: "css3",
  },
  cpp: {
    label: "C++",
    color: "#416295",
    text: "light",
    icon: "/images/tech-icons/cpp.png",
    simpleIcon: "cplusplus",
  },
  java: {
    label: "Java",
    color: "#373636ff",
    text: "light",
    icon: "/images/tech-icons/java.png",
    simpleIcon: "openjdk",
  },
};

// Map common input names to our keys
const ALIASES: Record<string, keyof typeof TECHS> = {
  "next.js": "nextjs",
  nextjs: "nextjs",
  react: "react",
  tailwindcss: "tailwind",
  tailwind: "tailwind",
  vite: "vite",
  flutter: "flutter",
  dart: "dart",
  fastapi: "fastapi",
  python: "python",
  postgresql: "postgresql",
  postgres: "postgresql",
  docker: "docker",
  nginx: "nginx",
  firebase: "firebase",
  firestore: "firebase",
  storage: "firebase",
  git: "git",
  html: "html",
  css: "css",
  "c++": "cpp",
  java: "java",
};

function resolveTech(name: string): TechMeta | null {
  const key = name.trim().toLowerCase();
  const resolved = ALIASES[key];
  if (resolved) return TECHS[resolved];
  return null;
}

export type TechBadgeProps = {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function TechBadge({
  name,
  size = "md",
  className,
}: TechBadgeProps) {
  const meta = resolveTech(name);
  const label = meta?.label ?? name;
  const bg = meta?.color ?? "#3B3B3B";
  const useLight = (meta?.text ?? "light") === "light";

  const sizes = {
    sm: {
      padX: "px-2.5",
      padY: "py-1",
      text: "text-xs",
      icon: 14,
      gap: "gap-2",
    },
    md: {
      padX: "px-3.5",
      padY: "py-1.5",
      text: "text-sm",
      icon: 16,
      gap: "gap-2.5",
    },
    lg: {
      padX: "px-4",
      padY: "py-2",
      text: "text-base",
      icon: 18,
      gap: "gap-3",
    },
  }[size];

  const iconSrc =
    meta?.icon ||
    (meta?.simpleIcon
      ? `https://cdn.simpleicons.org/${meta.simpleIcon}/FFFFFF`
      : undefined);

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border",
        sizes.padX,
        sizes.padY,
        sizes.text,
        sizes.gap,
        "shadow-sm",
        className ?? "",
      ].join(" ")}
      style={{
        backgroundColor: bg,
        color: useLight ? "#FFFFFF" : "#0B0B0B",
        borderColor: "rgba(255,255,255,0.08)",
      }}
      aria-label={`${label} badge`}
    >
      {iconSrc && (
        // Use native img to avoid Next remote domain config and keep static export simple
        <img
          src={iconSrc}
          alt=""
          width={sizes.icon}
          height={sizes.icon}
          loading="lazy"
          className="inline-block opacity-95"
        />
      )}
      <span className="font-medium">{label}</span>
    </span>
  );
}
