import { BrowserRouter } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Tech from "./components/Tech";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="bg-cover bg-no-repeat bg-center bg-hero-pattern">
            <Hero />
          </div>
        </ParallaxLayer>

        {/* ParallaxLayer for other components */}
        <ParallaxLayer offset={1} speed={0.9}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.9}>
          <Experience />
        </ParallaxLayer>
      </Parallax>
    </BrowserRouter>
  );
};

export default App;
