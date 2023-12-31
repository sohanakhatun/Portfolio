import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
