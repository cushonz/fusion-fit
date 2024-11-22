import "./about.css";
import React from "react";

function About() {
  return (
    <div className="main">
      <div className="info">
        <h1>Our founder</h1>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <p>
          James Carter is the proud owner of FitFusion, a gym he founded to
          inspire and empower individuals on their fitness journeys. With over a
          decade of experience as a personal trainer, James witnessed the
          incredible impact that fitness can have on people's lives. Driven by a
          vision to build a community-focused gym where everyone feels
          welcome—regardless of their fitness level—he opened FitFusion. James
          is passionate about helping others set goals, overcome challenges, and
          unlock their full potential. His mission is simple: to provide the
          tools, guidance, and encouragement needed to achieve lasting health
          and strength.
        </p>
      </div>
    </div>
  );
}

export default About;
