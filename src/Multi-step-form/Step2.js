import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPlan } from '../Redux-for-form/action1';
import "./step2.css"

const Step2 = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const selectedPlan = useSelector((state) => state.selectedPlan);
  console.log("selectedPlan=>",selectedPlan)

  const handleCardClick = (cardId) => {
    dispatch(setSelectedPlan(cardId));
  };

  return (
    <div className="step-text">
      <h2>Step 2: Select your plan</h2>
      <p>You have the option of monthly or billing.</p>
      <div className="cards">
        <div className="card-container">
          <div
            className={`card ${selectedPlan === 'card1' ? 'selected' : ''}`}
            id="card1"
            onClick={() => handleCardClick('card1')}
          >
            <div className="png">
              <img src="./joi2.png" alt="" />
            </div>
            <h2>Arcade</h2>
            <p>$9/mo</p>
          </div>
          <div
            className={`card ${selectedPlan === 'card2' ? 'selected' : ''}`}
            id="card2"
            onClick={() => handleCardClick('card2')}
          >
            <div className="png">
              <img src="./game.png" alt="" />
            </div>
            <h2>Advance</h2>
            <p>$12/mo</p>
          </div>
          <div
            className={`card ${selectedPlan === 'card3' ? 'selected' : ''}`}
            id="card3"
            onClick={() => handleCardClick('card3')}
          >
            <div className="png">
              <img src="./blue.png" alt="" />
            </div>
            <h2>Pro</h2>
            <p>$15/mo</p>
          </div>
        </div>
      </div>
      <div className="step2-button">
        <button onClick={onPrevious}>Go Back</button>
        <button onClick={onNext} disabled={!selectedPlan}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;