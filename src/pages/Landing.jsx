import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import CompanyProfile from "../components/CompanyProfile"
import About from "../components/About"
import Services from "../components/Services"
import CTA from "../components/CTA"

function landing() {
  return (
    <>
    <section id="hero" className=" relative h-screen bg-cover 
    bg-center bg-no-repeat px-20 py-14">

    <NavBar/>
    <Hero/>
    <img src="../imgs/bg.jpg" alt="hero image"  className="absolute inset-0
    w-full h-full object-cover opacity-25"/>
      
    </section>

    <section id=" profile" className=" p-8 md:pt-24 md:px-20">
      <CompanyProfile/>
    </section>


    <section id="about" className="bg-black p-8 md:px-20 md:py-24">
      <About/>

    </section>

    <section id="services" className="p-8 md:px-20">
      <Services/>
    </section>

    <section id="cta" className="p-8 md:px-20 md:py-52">
      <CTA/>
    </section>

    </>
  )
}

export default landing
