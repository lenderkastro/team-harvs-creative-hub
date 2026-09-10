import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, LockKeyhole, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/team-harvs-editorial-hero.jpg";
import collaborationImage from "@/assets/team-harvs-collaboration.jpg";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Team Harvs — Creative Collective" },
      { name: "description", content: "Team Harvs is a creative collective shaping fashion, editorials, campaigns and new creative voices from Uyo, Nigeria." },
      { property: "og:title", content: "Team Harvs — Creative Collective" },
      { property: "og:description", content: "Think. Create. Learn. Execute. Grow. A creative collective shaping meaningful visual work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const disciplines = [
  ["01", "Fashion", "Concept-led styling and image making."],
  ["02", "Editorials", "Stories with clarity, feeling and point of view."],
  ["03", "Campaigns", "Visual worlds built for modern brands."],
  ["04", "Model development", "A space to practise, experiment and grow."],
  ["05", "Creative production", "Ideas carried from direction to execution."],
];

const marqueeWords = ["Think", "Create", "Learn", "Execute", "Grow"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-cream/30 text-cream">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a href="#top" aria-label="Team Harvs home" className="group flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-current font-display text-lg font-semibold transition-transform duration-500 group-hover:rotate-[360deg]">TH</span>
            <span className="text-sm font-semibold uppercase tracking-[0.18em]">Team Harvs</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-10 text-xs font-medium uppercase tracking-[0.15em] md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#practice">Practice</a>
            <a className="nav-link" href="#collective">Collective</a>
          </nav>
          <div className="hidden md:block">
            <Button disabled variant="outline" className="border-cream/50 bg-transparent text-cream opacity-100 shadow-none">
              <LockKeyhole /> Workspace soon
            </Button>
          </div>
          <Button aria-label="Toggle navigation" variant="ghost" size="icon" onClick={() => setMenuOpen((value) => !value)} className="text-cream transition-transform duration-300 hover:bg-cream/10 hover:text-cream active:scale-90 md:hidden">
            <Menu className={menuOpen ? "rotate-90 transition-transform duration-300" : "transition-transform duration-300"} />
          </Button>
        </div>
        {menuOpen && (
          <nav className="animate-fade-in border-t border-cream/30 bg-wine-deep px-5 py-6 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-5 text-sm uppercase tracking-[0.15em]">
              {["about", "practice", "collective"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="reveal-up capitalize"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden bg-wine-deep text-cream">
        <img
          src={heroImage}
          alt="A fashion model, stylist, photographer and makeup artist creating together"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="hero-zoom absolute inset-0 h-full w-full object-cover object-[63%_center] will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.18}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-deep via-wine-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/70 via-transparent to-wine-deep/20" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-10 pt-32 md:px-10 md:pb-14 lg:px-16">
          <p className="reveal-up mb-5 text-xs font-semibold uppercase tracking-[0.22em]" style={{ animationDelay: "180ms" }}>Creative collective · Uyo, Nigeria</p>
          <h1 className="max-w-4xl font-display text-[clamp(5.2rem,13vw,12rem)] font-medium leading-[0.68]">
            <span className="block overflow-hidden">
              <span className="rise-in block" style={{ animationDelay: "260ms" }}>Team</span>
            </span>
            <span className="block overflow-hidden">
              <span className="rise-in block italic" style={{ animationDelay: "420ms" }}>Harvs</span>
            </span>
          </h1>
          <div className="mt-10 flex max-w-2xl flex-col gap-7 md:ml-[34%] md:mt-6 md:flex-row md:items-end md:justify-between">
            <p className="reveal-up max-w-md text-sm leading-6 text-cream/85 md:text-base md:leading-7" style={{ animationDelay: "700ms" }}>A space for emerging creatives to collaborate, experiment and turn considered ideas into meaningful visual work.</p>
            <a href="#about" className="float-soft flex size-12 shrink-0 items-center justify-center rounded-full border border-cream/60 transition-colors duration-300 hover:bg-cream hover:text-wine" aria-label="Discover Team Harvs"><ArrowDown /></a>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_2fr]">
            <Reveal as="p" variant="left" className="text-xs font-semibold uppercase tracking-[0.2em]">Our point of view</Reveal>
            <div>
              <Reveal as="h2" variant="mask" className="max-w-5xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                Creativity gets stronger when we <span className="italic text-primary">make it together.</span>
              </Reveal>
              <Reveal as="p" delay={160} className="mt-10 max-w-2xl text-base leading-7 text-muted-foreground md:ml-auto md:text-lg md:leading-8">
                Team Harvs brings together young creatives across fashion, editorial and commercial production. We make room for new voices, real contribution and the kind of practice that builds confidence.
              </Reveal>
            </div>
          </div>
          <div className="editorial-rule mt-20 grid grid-cols-2 gap-y-8 pt-6 text-xs uppercase tracking-[0.14em] md:grid-cols-5">
            {marqueeWords.map((word, index) => (
              <Reveal key={word} delay={index * 90} className="flex items-center gap-3">
                <span className="text-primary">0{index + 1}</span>
                <span>{word}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="flex overflow-hidden border-y border-primary/20 bg-secondary py-4 select-none">
        <div className="marquee-track flex shrink-0 gap-10 whitespace-nowrap pr-10 font-display text-3xl italic text-primary md:text-4xl">
          {Array.from({ length: 2 }).flatMap((_, group) =>
            marqueeWords.map((word) => (
              <span key={`${group}-${word}`} className="flex items-center gap-10">
                {word} <span className="text-base not-italic opacity-40">✳</span>
              </span>
            )),
          )}
        </div>
        <div aria-hidden className="marquee-track flex shrink-0 gap-10 whitespace-nowrap pr-10 font-display text-3xl italic text-primary md:text-4xl">
          {Array.from({ length: 2 }).flatMap((_, group) =>
            marqueeWords.map((word) => (
              <span key={`b-${group}-${word}`} className="flex items-center gap-10">
                {word} <span className="text-base not-italic opacity-40">✳</span>
              </span>
            )),
          )}
        </div>
      </div>

      <section id="practice" className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal as="p" variant="left" className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Our practice</Reveal>
              <Reveal as="h2" variant="mask" delay={100} className="font-display text-6xl leading-none md:text-8xl">What we shape</Reveal>
            </div>
            <Reveal as="p" delay={200} className="max-w-sm text-sm leading-6 text-primary-foreground/70">Across every discipline, the aim stays the same: intentional work, shared learning and a stronger creative voice.</Reveal>
          </div>
          <div className="border-t border-primary-foreground/30">
            {disciplines.map(([number, title, copy], index) => (
              <Reveal
                key={number}
                delay={index * 110}
                className="group relative grid gap-3 overflow-hidden border-b border-primary-foreground/30 py-7 md:grid-cols-[0.3fr_1.4fr_1fr_auto] md:items-center"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-primary-foreground/8 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden />
                <span className="relative text-xs text-primary-foreground/55">{number}</span>
                <h3 className="relative font-display text-4xl transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">{title}</h3>
                <p className="relative max-w-xs text-sm leading-6 text-primary-foreground/70">{copy}</p>
                <ArrowUpRight className="relative hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-45 md:block" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="collective" className="grid min-h-[80vh] lg:grid-cols-2">
        <Reveal variant="scale" className="min-h-[58vh] overflow-hidden lg:min-h-full">
          <img
            src={collaborationImage}
            alt="Team Harvs creatives preparing a fashion story in the studio"
            width={1408}
            height={1056}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
          />
        </Reveal>
        <div className="flex flex-col justify-between bg-secondary p-6 md:p-12 lg:p-16">
          <div className="flex items-start justify-between">
            <Reveal as="p" variant="left" className="text-xs font-semibold uppercase tracking-[0.2em]">The collective</Reveal>
            <span className="spin-slow flex size-16 items-center justify-center rounded-full border border-primary font-display text-2xl font-semibold text-primary">TH</span>
          </div>
          <div className="py-20 lg:py-12">
            <Reveal as="blockquote" variant="mask" className="font-display text-5xl leading-[0.96] md:text-7xl">
              “Step outside what you know. Bring an idea. Leave with <span className="italic text-primary">a new ability.</span>”
            </Reveal>
            <Reveal as="p" delay={180} className="mt-8 max-w-lg text-sm leading-7 text-muted-foreground">
              Starting in Uyo and Akwa Ibom, we are building a warm, confident community for models, stylists, makeup artists, image makers and creative collaborators.
            </Reveal>
          </div>
          <p className="border-t border-primary/30 pt-5 text-xs uppercase tracking-[0.18em]">Collaboration over competition</p>
        </div>
      </section>

      <section className="bg-wine-deep px-5 py-24 text-cream md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1600px] text-center">
          <Reveal as="p" className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-cream/65">The next chapter</Reveal>
          <Reveal as="h2" variant="mask" delay={100} className="mx-auto max-w-5xl font-display text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
            A home for the work <span className="italic">behind the work.</span>
          </Reveal>
          <Reveal as="p" delay={220} className="mx-auto mt-9 max-w-xl text-sm leading-7 text-cream/70">
            The private Team Harvs workspace for assignments, resources, submissions and feedback is coming soon.
          </Reveal>
          <Reveal delay={320} className="mt-10">
            <Button disabled size="lg" className="h-12 border border-cream/40 bg-transparent px-7 text-cream opacity-100 shadow-none"><LockKeyhole /> Workspace coming soon</Button>
          </Reveal>
        </div>
      </section>

      <footer className="bg-cream px-5 py-10 text-wine-deep md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 border-t border-wine/25 pt-7 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-display text-5xl font-semibold leading-none">Team Harvs</p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em]">Think · Create · Learn · Execute · Grow</p>
          </Reveal>
          <Reveal delay={120} className="text-left text-xs uppercase tracking-[0.14em] md:text-right">
            <p>Creative collective</p>
            <p className="mt-2 text-wine/60">Uyo · Akwa Ibom</p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
