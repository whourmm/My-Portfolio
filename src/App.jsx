import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Tech from "./components/Tech";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-cover bg-no-repeat bg-center bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
