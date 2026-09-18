"use client";

import { useState } from "react";
import Splash from "@/components/Splash";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import StatsBar from "@/components/sections/StatsBar";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import FeedbackSection from "@/components/FeedbackSection";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <Splash onComplete={() => setIntroDone(true)} />

      <section id="home">
        <Hero ready={introDone} />
      </section>

      <StatsBar />

      <section id="services">
        <Services />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="about">
        <About />
      </section>

      <FeedbackSection />

      <Testimonials />

     

      <Footer />
    </>
  );
}