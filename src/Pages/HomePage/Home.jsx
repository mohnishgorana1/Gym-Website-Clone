import AboutSection from "../../Components/AboutSection/AboutSection"
import BmiCalculator from "../../Components/BmiCalculator/BmiCalculator"
import FeaturedClassSection from "../../Components/FeaturedClassSection/FeaturedClassSection"
import Footer from "../../Components/Footer/Footer"
import GymTrainers from "../../Components/GymTrainers/GymTrainers"
import Hero from "../../Components/Hero/Hero"
import HeroCards from "../../Components/Hero/HeroCards"

function Home() {
  return (
    <div className="flex flex-col relative">
      <Hero />
      <HeroCards />
      <AboutSection />
      <FeaturedClassSection />
      <BmiCalculator />
      <GymTrainers />
      <Footer />
    </div>
  )
}

export default Home