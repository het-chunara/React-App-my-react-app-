import React from "react";
import "./Stepper.css";

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

function VerticalStepper({ activeStep }) {
  return (
    <div className="vertical-stepper">
    <div className="small-box">
      {steps.map((label, index) => (
        <div key={label} className="step">
          <div
            className={`circle ${
              activeStep >= index + 1 ? "active-circle" : "inactive-circle"
            }`}
          />
          <div className="step-label">{label}</div>
        </div>
      ))}
       </div>
    </div>
  );
}

export default VerticalStepper;
