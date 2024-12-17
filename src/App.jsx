/* eslint-disable react/no-unescaped-entities */
import "./index.css";
import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Certificates from "./components/Certificates.jsx";
function App() {
  return (
    <div className="bg-black text-white min-h-screen text-center py-5">
      <h1 className="text-2xl font-bold ">Hello! I'm Pranav Kumar Gupta</h1>
      <p>A Front End Developer | Web Developer | MERN stack Developer</p>
      <AboutMe />
      <Education />
      <Experience />
      <Certificates />
    </div>
  );
}

export default App;
