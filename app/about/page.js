import React from "react";

import {
  Navbar,
  HeroAbout,
  Vision,
  TeamSection,
  Value,
  Team,
  Footer,
} from "@/components";

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <TeamSection />
      <Value />
      <Vision />
      <Team />
      <Footer />
    </div>
  );
}
