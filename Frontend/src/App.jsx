import { useState, useEffect } from 'react';  // Import useState and useEffect
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Chatbot from "./Components/Chatbot";
import Marketplace from "./Components/Marketplace";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Totalizer from "./Components/Totalizer";
import axios from 'axios';
import Features from "./Components/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextTo3D from "./Components/TextTo3D";
import SignIn from './Components/SignIn';

function App() {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       setError(false);
  //       const response = await axios.get('/api/products');
  //       console.log(response.data);
  //       setProducts(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false);
  //     }
  //   })(); 
  // }, []); // Dependency array

  // // if (error) {
  // //   return <h1>Something went wrong</h1>;
  // // }

  // // if (loading) {
  // //   return <h1>Loading..</h1>;
  // // }

  return (
    <>
      {/* {loading && <h1>Loading...</h1>}
      {error && (<h1>Something went wrong</h1>)} */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Features />
              </>
            }
          />
          <Route path="/totalizer" element={<Totalizer />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/textto3d" element={<TextTo3D />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
