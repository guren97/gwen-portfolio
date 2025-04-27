import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import TechStack from "./components/Stack/TechStack.jsx";
import InfiniteTextLoop from "./components/InfiniteTextLoop/InfiniteTextLoop.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Project from "./components/Project/Project.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LenisProvider from "./components/misc/LenisProvider.jsx";

// import Resume from "./components/Resume/Resume.jsx";

const App = () => {
  return (
    <>
      <LenisProvider>
        <Router basename="/gwen-portfolio">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <InfiniteTextLoop />
                  <About />
                  <TechStack />
                  <Project />
                  <Footer />
                </>
              }
            />
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </Router>
      </LenisProvider>
    </>
  );
};

export default App;
