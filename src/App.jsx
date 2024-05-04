import { BrowserRouter } from "react-router-dom";
import { Hero, About, Contact, Experience, Navbar, Tech, Works, StarsCanvas, Sidebar, Footer } from './components';

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
          {/* <Feedbacks/> */}
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
