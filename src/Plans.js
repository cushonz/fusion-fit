import React from "react";
import "./plans.css";
import Button from "react-bootstrap/Button";
import bronze from "./images/Bronze.webp";
import silver from "./images/Silver.webp";
import gold from "./images/Gold.webp";

function Plans() {
  return (
    <div className="main-container primary">
      <div className="plans-container">
        <div className="plan">
          <h1>Bronze Plan</h1>
          <img src={bronze} />
          <ul>
            <li>Access to gym facilities during regular hours</li>
            <li>Basic gym equipment (cardio machines, free weights)</li>
            <li>Access to locker rooms and showers</li>
            <li>1 guest pass per month</li>
          </ul>
          <div className="button-box">
            <Button>Enroll</Button>
          </div>
        </div>
        <div className="plan">
          <h1>Silver Plan</h1>
          <img src={silver} />
          <ul>
            <li>All benefits of Bronze Membership</li>
            <li>Access to group fitness classes (yoga, Zumba, etc.)</li>
            <li>1 personal training session per month</li>
            <li>Priority booking for classes</li>
            <li>Discounts on workshops and special events</li>
          </ul>
          <div className="button-box">
            <Button>Enroll</Button>
          </div>
        </div>
        <div className="plan">
          <h1>Gold Plan</h1>
          <img src={gold} />
          <ul>
            <li>All benefits of Silver Membership</li>
            <li>Unlimited access to all group fitness classes</li>
            <li>Unlimited personal training sessions</li>
            <li>
              Exclusive access to premium gym areas (e.g., VIP lounge, advanced
              equipment)
            </li>
            <li>Access to spa facilities (sauna, steam room, massage)</li>
            <li>
              Priority reservations for personal training and group classes
            </li>
            <li>Free guest passes (up to 5 per month)</li>
            <li>Exclusive invitations to special events and workshops</li>
          </ul>
          <div className="button-box">
            <Button>Enroll</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
