import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos"
import "aos/dist/aos.css"


function App() {
  
  const [navIconClicked,setNavIconClicked] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true)
  const handleClick = () => {
      setNavIconClicked(!navIconClicked)
  }
  const toggleLight = () => {
      setDarkMode(!darkMode)
  }

  React.useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  return (
    <div className="" >
      <Navbar handleClick={handleClick} toggleLight={toggleLight} navIconClicked={navIconClicked} darkMode={darkMode}/>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} className="shadow-xl" />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
