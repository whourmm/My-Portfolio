import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Tech from "./components/Tech";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="bg-cover bg-no-repeat bg-center bg-hero-pattern fixed"
        style={{ zIndex: 100 }}
      >
        <Navbar />
        <Hero />
      </div>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.5}>
          <img src="src\assets\herobg.jpg" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2.2}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="">
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </BrowserRouter>
  );
};

export default App;
