import Header from "./Header"
import useTheme from "./Hook/useTheme";



function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme === 'light' ? 'border-gray-200 ' : 'border-[#14222e] bg-[#040615]'} w-full`}>
      <Header></Header>
      <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl">Home Section</h1>
      </section>
      <section id="skills" className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl">About Section</h1>
      </section>
      <section id="services" className="h-screen bg-gray-300 flex items-center justify-center">
        <h1 className="text-4xl">Services Section</h1>
      </section>
      <section id="contact" className="h-screen bg-gray-400 flex items-center justify-center">
        <h1 className="text-4xl">Contact Section</h1>
      </section>
    </div>
  )
}

export default App
