import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Testimonial from "./section/Testimonial";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </div>
  );
};
export default App;
