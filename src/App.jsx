import Button from "./components/Button"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Applications from "./components/Applications";
import MoreApplications from "./components/MoreApplications";
import Features from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Intro />
        <Applications />
        <MoreApplications />
        <Features />
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
