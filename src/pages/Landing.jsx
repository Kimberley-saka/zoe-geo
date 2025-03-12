import NavBar from "../components/NavBar"
import Hero from "../components/Hero"

function landing() {
  return (
    <>
    <section id="hero" className=" relative h-screen bg-black bg-cover bg-center bg-no-repeat px-20 py-14">

    <NavBar/>
    <Hero/>
    <img src="../imgs/bg.jpg" alt="hero image"  className="absolute inset-0 w-full h-full object-cover opacity-20"/>
      
    </section>

    <section>
      profile
    </section>

    </>
  )
}

export default landing
