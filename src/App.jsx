import Criteria from "./components/Criteria";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
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
    </>
  );
}

export default App;
