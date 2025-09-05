import Image from "next/image";
import { Reveal, RevealContainer } from "./animation/Reveal";

type Tech = { name: string; src: string };
export const TECH_ICONS: Tech[] = [
  { name: "C++", src: "/images/tech-icons/cpp.png" },
  { name: "Python", src: "/images/tech-icons/python.png" },
  { name: "Java", src: "/images/tech-icons/java.png" },
  { name: "Flutter", src: "/images/tech-icons/flutter-icon.png" },
  { name: "Dart", src: "/images/tech-icons/dart.png" },
  { name: "Git", src: "/images/tech-icons/git.png" },
  { name: "Firebase", src: "/images/tech-icons/firebase.png" },
  { name: "HTML", src: "/images/tech-icons/html.png" },
  { name: "CSS", src: "/images/tech-icons/css.png" },
  { name: "Next.js", src: "/images/tech-icons/nextjs.png" },
  { name: "React", src: "/images/tech-icons/react.png" },
  { name: "Tailwind", src: "/images/tech-icons/tailwind.png" },
  { name: "FastAPI", src: "/images/tech-icons/fastapi.png" },
  { name: "Docker", src: "/images/tech-icons/docker.png" },
  { name: "Nginx", src: "/images/tech-icons/nginx.png" },
];

function chunkBySizes<T>(arr: T[], sizes: number[]) {
  const out: T[][] = [];
  let i = 0;
  for (const s of sizes) {
    out.push(arr.slice(i, i + s));
    i += s;
    if (i >= arr.length) break;
  }
  // if there are leftovers, append them to the last row
  if (i < arr.length) {
    if (out.length === 0) out.push(arr.slice(i));
    else out[out.length - 1] = out[out.length - 1].concat(arr.slice(i));
  }
  return out;
}

/**
 * Icon component
 *
 * - Uses a responsive fixed square for identical icon sizes across rows.
 * - Adjust sizes here by editing the width classes below.
 *
 * Example sizes:
 *  - default (mobile): w-10  -> ~40px
 *  - sm: w-12   -> ~48px
 *  - md: w-14   -> ~56px
 *  - lg: w-16   -> ~64px
 *  - xl: w-20   -> ~80px
 *
 * Tweak these classes to your liking.
 */
function Icon({ name, src }: Tech) {
  return (
    <Reveal
      as="div"
      key={name}
      className="group flex flex-col items-center gap-2"
    >
      {/* `flex-none` prevents shrinking so every icon box keeps same size in a row */}
      <div
        className="
          relative
          flex-none
          w-14 sm:w-16 md:w-18 lg:w-20 xl:w-22
          aspect-square
        "
        aria-hidden="true"
      >
        {/* `fill` requires parent to be position:relative (we have `relative`) */}
        <Image
          src={src}
          alt={name}
          fill
          sizes="(min-width:1280px) 72px, (min-width:1024px) 64px, (min-width:768px) 56px, 48px"
          className="object-contain filter grayscale-[0.5] saturate-[0.5] opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:saturate-100 group-hover:opacity-100"
        />
      </div>
      {/* optional caption if you want names; remove if not needed */}
      {/* <span className="text-xs opacity-80">{name}</span> */}
    </Reveal>
  );
}

export function TechIconGrid() {
  // row prescriptions you requested
  const rowsDesktop = [8, 7]; // full desktop: 8 in top row, 7 in bottom
  const rowsSmaller = [6, 5, 4]; // smaller screens: 6,5,4
  const rowsMobile = [4, 4, 4, 3]; // mobile: 4,4,4,3

  const desktopRows = chunkBySizes(TECH_ICONS, rowsDesktop);
  const smallerRows = chunkBySizes(TECH_ICONS, rowsSmaller);
  const mobileRows = chunkBySizes(TECH_ICONS, rowsMobile);

  const Row = ({ icons }: { icons: Tech[] }) => (
    // `gap-x` controls horizontal spacing between icons; adjust as needed
    <div className="flex justify-center gap-x-11">
      {icons.map((t) => (
        <Icon key={t.name} {...t} />
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop layout - show on large screens and up */}
      <RevealContainer
        as="div"
        className="hidden lg:block space-y-11"
        stagger={0.05}
        immediate
      >
        {desktopRows.map((row, idx) => (
          <Row key={`desktop-row-${idx}`} icons={row} />
        ))}
      </RevealContainer>

      {/* Smaller screens layout (e.g. tablet) - show between md and lg */}
      <RevealContainer
        as="div"
        className="hidden md:block lg:hidden space-y-10"
        stagger={0.05}
        immediate
      >
        {smallerRows.map((row, idx) => (
          <Row key={`smaller-row-${idx}`} icons={row} />
        ))}
      </RevealContainer>

      {/* Mobile layout - show on small screens (default) */}
      <RevealContainer
        as="div"
        className="block md:hidden space-y-8"
        stagger={0.05}
        immediate
      >
        {mobileRows.map((row, idx) => (
          <Row key={`mobile-row-${idx}`} icons={row} />
        ))}
      </RevealContainer>
    </>
  );
}
