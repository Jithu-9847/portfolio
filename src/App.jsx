import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

import "./index.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/Resume" element={<ResumePage/>}/>
          <Route path="/Projects" element={<ProjectsPage/>}/>
          <Route path="/Contact" element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;