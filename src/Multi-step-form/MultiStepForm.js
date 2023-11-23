// Multi-step-form/MultiStepFormSteps.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Thankyou from "./Thankyou";
import VerticalStepper from "./VerticalStepper";
import "./Main.css";
// import { setUserData,setSelectedPlan,setSelectedAddons } from "../Redux-for-form/action1";
// import { useSelector } from "react-redux";

const stepNames = [
  "Personal-Info",
  "Select-plan",
  "Pick-add-ons",
  "Finishing-up",
  "thankyou",
];

// console.log("userdata=>", setUserData);

const MultiStepFormSteps = () => {
  // const userdata = useSelector((state) => state.userData);
  const step1 = useSelector((state) => state.userData);
  const selectedPlan2 = useSelector((state) => state.selectedPlan);
  const selectedAddons = useSelector((state) => state.selectedAddons);


  console.log("userdata=>", step1,selectedPlan2,selectedAddons);
  // console.log("selectedPlan2=>", selectedPlan2);
  // console.log("selectedAddons=>", selectedAddons);

  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  console.log("window=>", window);

  const setPageName = (name) => {
    window.history.pushState({}, "", `/${name}`);
    console.log("name=>", name);
  };

  useEffect(() => {
    const stepName = stepNames[step];
    setPageName(stepName);
  }, [step]);

  return (
    <div className="main">
      <div className="stepperr">
        <VerticalStepper activeStep={step + 1} />
      </div>
      <div className="step-page">
        {step === 0 && <Step1 onNext={nextStep} />}
        {step === 1 && <Step2 onNext={nextStep} onPrevious={previousStep} />}
        {step === 2 && <Step3 onNext={nextStep} onPrevious={previousStep} />}
        {step === 3 && <Step4 onPrevious={previousStep} onNext={nextStep} />}
        {step === 4 && <Thankyou onPrevious={previousStep} />}
      </div>
    </div>
  );
};

export default MultiStepFormSteps;
