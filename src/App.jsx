import "./index.css";
import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education.jsx";
function App() {
  return (
    <div className="bg-black text-white min-h-screen text-center">
      <h1 className="text-2xl font-bold ">Hello! I'm Pranav Kumar Gupta</h1>
      <p>A Front End Developer | Web Developer | MERN stack Developer</p>
      <AboutMe />
      <Education />
    </div>
  );
}

export default App;
