
import "./App.css";
import AboutMe from "./assets/AboutMe";
import Hero from "./assets/Hero";
import Nav from "./assets/Navigation";
import gambar from "./files/test.png";
import SkillSection from "./assets/SkillSection"
import "./AnimationStuff.css"
import EduorAchieve from "./assets/edsAch";
import Footer from "./assets/Footer";

function App() {
  return (
    <>
      <Nav />
      <div className="px-5">
        <div className="flex flex-col md:flex-row md:justify-between">
          <Hero />
          <div className="flex sm:h-screen sm:justify-center sm:items-center">
            <img src={gambar}></img>
          </div>
        </div>

        {/* here is the element when you scroll down it show about me */}
        <div>
          <AboutMe />
        </div>
        <div>
          <SkillSection />
        </div>
        <div>
          <EduorAchieve />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
