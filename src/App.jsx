import Banner from "./components/Banner/Banner";
import Contract from "./components/Contract/Contract";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Education from "./Education/Education";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import useTheme from "./Hook/useTheme";





function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "border-gray-200 " : "border-[#14222e] bg-[#040615]"
      } w-full`}
    >
      <div className=" z-10 w-full">
      <Header></Header>
      </div>
      
      <section id="home">
        <Banner />
      </section>
     

      
      <section id="services">
        <Services/>
      </section>


      <section id="skills">
        <Skills></Skills>
      </section>


      <section id="projects">
        <Projects></Projects>
      </section>


      <section id="education">
        <Education></Education>
      </section>
      <section id="contact">
        <Contract></Contract>
      </section>

      <section id="footer">
        <Footer></Footer>
      </section>

      
     
    </div>
  );
}

export default App;
