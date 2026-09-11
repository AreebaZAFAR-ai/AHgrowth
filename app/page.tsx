"use client";

import { useState } from "react";
import Splash from "@/components/Splash";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import StatsBar from "@/components/sections/StatsBar";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <Splash onComplete={() => setIntroDone(true)} />
      <Hero ready={introDone} />
      <StatsBar />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
