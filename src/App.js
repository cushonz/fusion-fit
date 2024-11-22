import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Join from "./join";
import About from "./about";
import Plans from "./Plans";

export default function App() {
  return (
    <div className="primary">
      <Router>
        <div>
          <nav>
            <h1>FitFusion</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link> {/* Link to the landing page */}
            <Link to="/plans">Membership Plans</Link>
          </nav>
          <Routes>
            {/* React Router v6 uses `element` instead of `component`, and `exact` is no longer needed */}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/join" element={<Join />} />
            <Route path="/about" element={<About />} />
            <Route path="plans" element={<Plans />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
