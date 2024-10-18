import Banner from "./components/Banner/Banner";
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
      <section>
        <div>
          {/* <Spotlight
            className="absolute left-0 md:right-0 top-32 transform -translate-x-1/2 h-[80vh] w-[70vw]"
            fill="gray"
          /> */}
          <Spotlight
  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100vh] w-[100vw]"
  fill="gray"
/>

          <Spotlight
            // className="absolute right-0 md:-right-32 bottom-32 transform -translate-x-1/2 h-[80vh] w-[80vw]"
            fill="gray"
          />
        </div>
      </section>

      <section
        id="skills"
        className="h-screen bg-gray-200 flex items-center justify-center"
      >
        <h1 className="text-4xl">About Section</h1>
      </section>
      <section
        id="services"
        className="h-screen bg-gray-300 flex items-center justify-center"
      >
        <h1 className="text-4xl">Services Section</h1>
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
