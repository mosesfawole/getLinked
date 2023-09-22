import Criteria from "./components/Criteria";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Partners from "./components/Partners";
import Rewards from "./components/Rewards";
import Rules from "./components/Rules";
// import Timeline from "./components/Timeline";
// import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <hr className="" />
      <Hero />
      <hr />
      <Introduction />
      <hr />
      <Rules />
      <hr />
      <Criteria />
      <Faq />
      {/*  */}
      {/*  */}
      <Rewards />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
