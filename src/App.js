import React from "react";
import Header from "./components/Header/Header";
import Subtitle from "./components/Sections/Subtitle";
import VSL from "./components/Sections/VSL";
import CTA from "./components/Sections/CTA";
import Introduction from "./components/Sections/Introduction";
import Benefits from "./components/Sections/Benefits";
import Bonuses from "./components/Sections/Bonuses";
import AnimatedSection from "./components/AnimatedSection";
import RegretAppeal from "./components/Sections/RegretAppeal";
import LimitedOffer from "./components/Sections/LimitedOffer";
import Guarantee from "./components/Sections/Guarantee";
import Footer from "./components/Sections/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <AnimatedSection>
        <Subtitle />
      </AnimatedSection>
      <AnimatedSection>
        <VSL />
      </AnimatedSection>
      <AnimatedSection>
        <Introduction />
      </AnimatedSection>
      <AnimatedSection>
        <Benefits />
      </AnimatedSection>
      <AnimatedSection>
        <Bonuses />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
      <AnimatedSection>
  <RegretAppeal />
</AnimatedSection>
<AnimatedSection>
  <LimitedOffer />
</AnimatedSection>
<AnimatedSection>
  <Guarantee />
</AnimatedSection>
<Footer />
    </div>
  );
};

export default App;
