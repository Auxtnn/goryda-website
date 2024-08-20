import React from "react";

import {
  Navbar,
  HeroAbout,
  Vision,
  TeamSection,
  Value,
  Team,
  Footer,
  Download,
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
      <Download />
      <Footer />
    </div>
  );
}
