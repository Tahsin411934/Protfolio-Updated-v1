import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";


import Header from "./Header";
import useTheme from "./Hook/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "border-gray-200 " : "border-[#14222e] bg-[#040615]"
      } w-full`}
    >
      <Header></Header>
      <section id="home">
        <Banner />
      </section>
     

      
      <section id="services">
        <Services/>
      </section>


      <section id="skills">
        <Skills></Skills>
      </section>


      <section id="skills">
        <Projects></Projects>
      </section>

      
     
    </div>
  );
}

export default App;
