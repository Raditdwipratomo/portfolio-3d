import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import About from "./section/About";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </div>
  );
};
export default App;
