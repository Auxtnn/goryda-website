import React from "react";

import {
  Navbar,
  HeroSection,
  Service,
  DriverSection,
  PassengerSection,
  Download,
  Faq,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <DriverSection />
      <PassengerSection />
      <Download />
      <Faq />
      <Footer />
    </div>
  );
}
