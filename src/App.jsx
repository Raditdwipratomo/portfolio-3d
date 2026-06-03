import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Testimonial from "./section/Testimonial";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
