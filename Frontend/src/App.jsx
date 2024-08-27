import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Chatbot from "./Components/Chatbot";
import Marketplace from "./Components/Marketplace";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Totalizer from "./Components/Totalizer";


import Features from "./Components/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextTo3D from "./Components/TextTo3D";


function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <About />
            <Features />
          </>
          } />
          <Route path="/totalizer" element={<Totalizer />} />
          <Route path="/marketplace" element={<Marketplace />} />

          <Route path="/textto3d" element={<TextTo3D />} />

          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App




