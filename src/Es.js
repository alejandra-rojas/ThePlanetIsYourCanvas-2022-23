import Header from "./staticComponents/Header";
import About from "./staticComponents/About";
import Main from "./staticComponents/Main";
import Rules from "./staticComponents/Rules";
import Resources from "./staticComponents/Resources";
import Participate from "./staticComponents/Participate";
import VoteIntro from "./staticComponents/VoteIntro";
import VoteWidget from "./VoteWidget";
import Footer from "./staticComponents/Footer";
import VoteOut from "./staticComponents/VoteOut";
// import AllStatic from "./staticComponents/AllStatic";
// import Maintenance from "./staticComponents/Maintenance";
// import Allnocount from "./staticComponents/Allnocount";
import Winners from "./staticComponents/Winners";

function Es() {
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
      <Winners />

      {/* <Maintenance />
      <Allnocount /> */}

      <Footer />
    </>
  );
}

export default Es;
