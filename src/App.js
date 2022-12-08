import "./styles/App.css";
import SideBar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Error from "./components/Error";
import Footer from "./components/Footer";

// Projects
import Counter from "./Projects/Counter";
import Accordion from "./Projects/Accordion";
import ProfileApp from "./Projects/ProfileApp";
import RandomJoke from "./Projects/RandomJoke";
import TODO from "./Projects/TODO";
import WeatherApp from "./Projects/WeatherApp";
import Calculator from "./Projects/Calculator";
import Clock from "./Projects/Clock";

const App = () => {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
          {/* Projects Routes */}
          <Route path="/projects/counter" element={<Counter />} />
          <Route path="/projects/accordion" element={<Accordion />} />
          <Route path="/projects/profileapp" element={<ProfileApp />} />
          <Route path="/projects/randomjoke" element={<RandomJoke />} />
          <Route path="/projects/todo" element={<TODO />} />
          <Route path="/projects/weather" element={<WeatherApp />} />
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/clock" element={<Clock />} />
        </Routes>
        <Footer />
      </SideBar>
    </Router>
  );
};

export default App;
