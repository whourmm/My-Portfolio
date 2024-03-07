import { BrowserRouter } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import github from "./assets/anda.png";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={1}>
          <div className="bg-cover bg-no-repeat bg-center bg-hero-pattern">
            <Hero />
          </div>
          <div className=" sm:mt-[120px] flex items-center justify-center">
            <img src={github} className="rounded-full  w-[200px] mt-[100px] " />
          </div>
          <div className="mt-[60px] justify-center items-center text-center text-xl">
            - Welcome To My Portfolio Static Website -
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.2}>
          <div className="mt-[-350px] sm:mt-[0px] bg-cover bg-no-repeat bg-center bg-about-pattern">
            <About />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.5}>
          <div className="mt-[-500px]">
            <Experience />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1.8}>
          <div className="h-[1000px] bg-cover bg-no-repeat bg-center bg-contact-pattern">
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </BrowserRouter>
  );
};

export default App;
