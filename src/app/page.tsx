"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { CommandPalette } from "@/components/command-palette";
import { IntroAnimation } from "@/components/intro-animation";
import { Hero } from "@/components/hero";
import { Currently } from "@/components/currently";
import { Projects } from "@/components/projects";
import { Philosophy } from "@/components/philosophy";
import { Stack } from "@/components/stack";
import { ThemePicker } from "@/components/theme-picker";
import { GithubSection } from "@/components/github";
import { About } from "@/components/about";
import { Timeline } from "@/components/timeline";
import { Notes } from "@/components/notes";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onDone={() => setIntroDone(true)} />}

      <div
        style={{
          opacity: introDone ? 1 : 0,
          transition: "opacity 0.55s ease",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navigation onOpenPalette={() => setPaletteOpen(true)} />
        <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
        <main className="flex-1">
          <Hero />
          <GithubSection />
          <Currently />
          <Projects />
          <Timeline />
          <Stack />
          <Philosophy />
          <About />
          <Notes />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
