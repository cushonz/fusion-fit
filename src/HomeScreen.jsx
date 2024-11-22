import React from "react";
import "./styles.css";
import ImgSlide from "./ImgSlide"; // Correct default import
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <div className="home-grid primary">
        <div className="slider">
          <ImgSlide />
        </div>
        <div className="info secondary">
          <h1>What we do</h1>
          <p>
            At FitFusion, we believe that fitness is for everyone. Our unique
            approach combines cutting-edge equipment, inclusive classes, and
            personalized support to help you reach your goals—no matter your
            age, fitness level, or background. From energizing group workouts to
            serene yoga sessions, from expert-led strength training to
            beginner-friendly programs, there’s something here for everyone. Our
            community is as diverse as our offerings, and our supportive
            environment ensures you’ll feel right at home. Discover a place
            where your fitness journey is celebrated, your goals are
            prioritized, and your well-being takes center stage. At FitFusion,
            we’re more than a gym—we’re a movement for a healthier, happier you!
            Join us today and see how we’re redefining fitness for all.
          </p>
          <Button className="primary" onClick={() => navigate("/join")}>
            Join now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
