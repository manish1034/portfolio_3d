import { BrowserRouter } from "react-router-dom";
// import { motion } from "framer-motion";
// import { fadeIn } from "./utils/motion";
// import { Parallax } from "react-parallax";
// import { herobg } from "./assets";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Sidebar,Feedbacks, Footer } from './components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative bg-primary rounded-b-3xl"> 
          <div className="rounded-b-3xl">
            <Navbar/>
            <Hero/>
          </div>
          <Sidebar/>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className="relative z-0">
            <Sidebar/>
            <Contact/>
            <StarsCanvas/>
          </div>
          <Footer/>
        </div> 
      </BrowserRouter>
    </>
  )
}

export default App;
