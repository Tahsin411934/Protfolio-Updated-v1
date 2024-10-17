import Header from "./Header"



function App() {
  

  return (
    <>
      <Header></Header>
      <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl">Home Section</h1>
      </section>
      <section id="about" className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl">About Section</h1>
      </section>
      <section id="services" className="h-screen bg-gray-300 flex items-center justify-center">
        <h1 className="text-4xl">Services Section</h1>
      </section>
      <section id="contact" className="h-screen bg-gray-400 flex items-center justify-center">
        <h1 className="text-4xl">Contact Section</h1>
      </section>
    </>
  )
}

export default App
