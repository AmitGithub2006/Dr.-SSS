import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import Admissions from "./components/Admissions";
import Events from "./components/Events";
import Circulars from "./components/Circulars";
import logo from "./assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="College Logo" />
        <span>Dr. Shaitan Singh Shakya College of Pharmacy</span>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/about-us">About Us</Link>
          <div className="dropdown-content">
            <Link to="/about-us/a">The Institute</Link>
            <Link to="/about-us/b">Vision</Link>
            <Link to="/about-us/c">Mission</Link>
            <Link to="/about-us/d">Chairman's Message</Link>
            <Link to="/about-us/e">Affiliation</Link>
            <Link to="/about-us/f">Academic Committee</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/admissions">Admissions</Link>
          <div className="dropdown-content">
            <Link to="/admissions/g">Admission Procedure</Link>
            <Link to="/admissions/h">Fee Structure</Link>
            <Link to="/admissions/i">Online Form</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/events">Events</Link>
          <div className="dropdown-content">
            <Link to="/events/j">Annual Function</Link>
            <Link to="/events/k">Sports Day</Link>
            <Link to="/events/m">Freshers Party</Link>
            <Link to="/events/l">Farewell</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/circulars">Circulars</Link>
          <div className="dropdown-content">
            <Link to="/circulars/m">Examination Dates</Link>
            <Link to="/circulars/n">Fee Submission</Link>
            <Link to="/circulars/o">Holidays</Link>
            <Link to="/circulars/p">Other</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/courses">Courses</Link>
          <div className="dropdown-content">
            <Link to="/courses/d">B. A.</Link>
            <Link to="/courses/e">B. Sc.</Link>
            <Link to="/courses/f">B. Pharma</Link>
            <Link to="/courses/g">D. Pharma</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/a" element={<p>a content</p>} />
        <Route path="/about-us/b" element={<p>b content</p>} />
        <Route path="/about-us/c" element={<p>c content</p>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/d" element={<p>d content</p>} />
        <Route path="/courses/e" element={<p>e content</p>} />
        <Route path="/courses/f" element={<p>f content</p>} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/admissions/g" element={<p>g content</p>} />
        <Route path="/admissions/h" element={<p>h content</p>} />
        <Route path="/admissions/i" element={<p>i content</p>} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/j" element={<p>j content</p>} />
        <Route path="/events/k" element={<p>k content</p>} />
        <Route path="/events/l" element={<p>l content</p>} />
        <Route path="/circulars" element={<Circulars />} />
        <Route path="/circulars/m" element={<p>m content</p>} />
        <Route path="/circulars/n" element={<p>n content</p>} />
        <Route path="/circulars/o" element={<p>o content</p>} />
      </Routes>
    </Router>
  );
}

export default App;
