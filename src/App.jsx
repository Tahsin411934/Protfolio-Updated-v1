import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import { Spotlight } from "./components/ui/Spotlight";

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


      <section
        id="contact"
        className="h-screen bg-gray-400 flex items-center justify-center"
      >
        <h1 className="text-4xl">Contact Section</h1>
      </section>
    </div>
  );
}

export default App;
