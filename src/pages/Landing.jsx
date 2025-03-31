import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import CompanyProfile from "../components/CompanyProfile"
import About from "../components/About"

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

    <section id=" profile" className="py-24 px-20">
      <CompanyProfile/>
    </section>


    <section id="about" className="bg-black px-20 py-24">
      <About/>

    </section>

    </>
  )
}

export default landing
