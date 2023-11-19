import Navbar from "@/components/Global/Navbar"
import HeroSection from "@/components/Home/HeroSection"
import Service from "@/components/Home/Service"
import DriverSection from "@/components/Home/DriverSection"
import PassengerSection from "@/components/Home/PassengerSection"
import Download from "@/components/Home/Download"
import Faq from "@/components/Global/Faq"
import Footer from "@/components/Global/Footer"

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


