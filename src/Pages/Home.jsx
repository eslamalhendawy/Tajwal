import Hero from "../Components/Hero"
import CountriesList from "../Components/CountriesList"
import PhoneSection from "../Components/PhoneSection"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <section>
      <Hero />
      <CountriesList />
      <PhoneSection />
      <Footer />
    </section>
  )
}

export default Home