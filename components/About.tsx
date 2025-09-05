import { GraduationCap, Code, Brain, Coffee } from "lucide-react";
import { Reveal, RevealContainer } from "./animation/Reveal";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description:
        "Currently pursuing my degree in Computer Science, focusing on software engineering principles and modern development practices.",
    },
    {
      icon: Code,
      title: "Mobile App Developer",
      description:
        "Specialized in cross-platform Flutter development, creating seamless experiences for both iOS and Android platforms.",
    },
    {
      icon: Brain,
      title: "ML Enthusiast",
      description:
        "Passionate about machine learning and AI, building predictive models and exploring the future of intelligent applications.",
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description:
        "Love tackling complex challenges and turning ideas into reality through clean, efficient, and maintainable code.",
    },
  ];

  return (
    <section id="about" className="py-10 px-4 sm:px-6 relative">
      <div className="pointer-events-none absolute -top-6 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-bg" />
      <div className="container mx-auto max-w-6xl">
        <RevealContainer as="div" className="text-center mb-12 sm:mb-16">
          <Reveal as="h2">
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary mb-4 sm:mb-6 inline-block">
              About <span className="text-accent">Me</span>
            </span>
          </Reveal>
          <Reveal
            as="p"
            className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m a passionate Computer Science student and developer who
            loves creating innovative solutions that make a real difference.
            From mobile applications to AI-powered platforms, I enjoy exploring
            the intersection of technology and user experience.
          </Reveal>
        </RevealContainer>

        <RevealContainer
          as="div"
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16"
          stagger={0.12}
        >
          {highlights.map((highlight) => (
            <Reveal
              key={highlight.title}
              as="div"
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mb-4">
                <highlight.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-text-primary mb-3">
                {highlight.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {highlight.description}
              </p>
            </Reveal>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
};

export default About;
