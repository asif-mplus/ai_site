import "./App.css";
import { Header, Navbar, Brand, Possibility, CTA, Gallery } from "./components";
import { WhatGPT3, Features, Blog, Footer } from "./containers";
import DropSearch from "./components/DropSearch";
function App() {
  return (
    <div className="App gradient__bg">
      <div className="background-gradient ">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <DropSearch />
    </div>
  );
}

export default App;
