import React from "react";
import "./plans.css";
import Button from "react-bootstrap/Button";
import bronze from "./images/Bronze.webp";
import silver from "./images/Silver.webp";
import gold from "./images/Gold.webp";

function Plans() {
  const plans = [
    {
      title: "Bronze Plan",
      img: bronze,
      features: [
        "Access to gym facilities during regular hours",
        "Basic gym equipment (cardio machines, free weights)",
        "Access to locker rooms and showers",
        "1 guest pass per month",
      ],
    },
    {
      title: "Silver Plan",
      img: silver,
      features: [
        "All benefits of Bronze Membership",
        "Access to group fitness classes (yoga, Zumba, etc.)",
        "1 personal training session per month",
        "Priority booking for classes",
        "Discounts on workshops and special events",
      ],
    },
    {
      title: "Gold Plan",
      img: gold,
      features: [
        "All benefits of Silver Membership",
        "Unlimited access to all group fitness classes",
        "Unlimited personal training sessions",
        "Exclusive access to premium gym areas (e.g., VIP lounge, advanced equipment)",
        "Access to spa facilities (sauna, steam room, massage)",
        "Priority reservations for personal training and group classes",
        "Free guest passes (up to 5 per month)",
        "Exclusive invitations to special events and workshops",
      ],
    },
  ];

  return (
    <div className="main-container primary">
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            className="plan"
            key={index}
            style={{ animationDelay: `${(plans.length - index - 1) * 0.2}s` }} // Reverse the delay
          >
            <h1>{plan.title}</h1>
            <img src={plan.img} alt={`${plan.title} Image`} />
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="button-box">
              <Button>Enroll</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
