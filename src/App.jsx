import Criteria from "./components/Criteria";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Rewards from "./components/Rewards";
import Rules from "./components/Rules";
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
      <Rewards />
    </>
  );
}

export default App;
