import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Service from "@/components/Service"
import DriverSection from "@/components/DriverSection"
import PassengerSection from "@/components/PassengerSection"
import Download from "@/components/Download"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"

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
  )
}


