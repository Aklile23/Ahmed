import Button from "./components/Button"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Demo from "./components/Demo";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Demo />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        {/* <Roadmap /> */}
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;