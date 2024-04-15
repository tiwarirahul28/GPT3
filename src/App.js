import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import {
  Footer,
  Blog,
  WhatGPT3,
  Features,
  Header,
  Possibility,
} from "./containers";
// import Features from "./containers/features/Features";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
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
    </div>
  );
}

export default App;
