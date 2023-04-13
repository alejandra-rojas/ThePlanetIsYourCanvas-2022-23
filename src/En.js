import Header from "./staticComponents/Header";
import About from "./staticComponents/About";
import VoteWidget from "./VoteWidget";
import Main from "./staticComponents/Main";
import Rules from "./staticComponents/Rules";
import Resources from "./staticComponents/Resources";
import Participate from "./staticComponents/Participate";
import VoteIntro from "./staticComponents/VoteIntro";
import Footer from "./staticComponents/Footer";
import VoteOut from "./staticComponents/VoteOut";

function En() {
  return (
    <>
      <Header />
      <About />
      <Main />
      <Rules />
      <Resources />
      <Participate />
      <VoteIntro />
      <VoteWidget />
      <VoteOut />
      <Footer />
    </>
  );
}

export default En;
