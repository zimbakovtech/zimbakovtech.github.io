import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Calendar,
} from "lucide-react";
import { Reveal, RevealContainer } from "./animation/Reveal";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "damjan@zimbakov.dev",
      link: "mailto:damjan@zimbakov.dev",
      color: "text-accent",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@zimbakovtech",
      link: "https://github.com/zimbakovtech",
      color: "text-text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Damjan Zimbakov",
      link: "https://linkedin.com/in/damjan-zimbakov-775077213/",
      color: "text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@damjanzimbakov",
      link: "https://instagram.com/damjanzimbakov",
      color: "text-pink-400",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <RevealContainer as="div" className="text-center mb-12 sm:mb-16">
          <Reveal
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary mb-4 sm:mb-6"
          >
            Get In <span className="text-accent">Touch</span>
          </Reveal>
          <Reveal
            as="p"
            className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto"
          >
            I&apos;m always interested in discussing new opportunities,
            collaborations, or just having a chat about technology and
            development.
          </Reveal>
        </RevealContainer>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <RevealContainer as="div">
              <Reveal
                as="h3"
                className="text-2xl font-semibold text-text-primary mb-6"
              >
                Let&apos;s Connect
              </Reveal>
              <Reveal
                as="p"
                className="text-text-secondary mb-8 leading-relaxed"
              >
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I&apos;d love to hear from you. Feel free to
                reach out through any of the channels below.
              </Reveal>
            </RevealContainer>

            <RevealContainer as="div" className="space-y-6" stagger={0.12}>
              {contactInfo.map((contact) => (
                <Reveal
                  as="a"
                  key={contact.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                  href={contact.link}
                  target={
                    contact.link.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div
                    className={`p-3 rounded-lg bg-surface-elevated group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">
                      {contact.label}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {contact.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </RevealContainer>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <RevealContainer
              as="div"
              className="p-8 rounded-2xl bg-gradient-to-br from-surface to-surface-elevated border border-border"
            >
              <Reveal as="div" className="mb-6">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Ready to Start a Project?
                </h3>
                <p className="text-text-secondary">
                  I&apos;m currently available for new opportunities and
                  collaborations.
                </p>
              </Reveal>

              <Reveal
                as="a"
                href="mailto:damjan@zimbakov.dev"
                className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent-hover text-portfolio-bg font-semibold px-6 sm:px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
              >
                Send Me an Email
              </Reveal>
            </RevealContainer>

            {/* Additional Info */}
            <Reveal
              as="div"
              className="mt-8 p-6 rounded-xl bg-surface border border-border"
            >
              <div className="flex items-center justify-center gap-2 text-secondary">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-code">
                  Available for remote work
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
