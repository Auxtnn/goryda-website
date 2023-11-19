// import Navbar from "@/components/Navbar"
// import HeroAbout from "@/components/HeroAbout"
// import About from "@/components/About"
// import Vision from "@/components/Vision"
// import Values from "@/components/Values"
// import FounderSection from "@/components/FounderSection"
// import Footer from "@/components/Footer"
import Navbar from "@/components/Global/Navbar"
import HeroAbout from "@/components/About/HeroAbout"
import Vision from "@/components/About/Vision"
import TeamSection from "@/components/About/TeamSection"
import Value from "@/components/About/Value"
import Team from "@/components/About/Team"
import Footer from "@/components/Global/Footer"

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
  )
}


