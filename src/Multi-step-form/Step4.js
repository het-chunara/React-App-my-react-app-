import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./step4.css";
import { setUserData, setSelectedPlan, setSelectedAddons } from '../Redux-for-form/action1';


const Step4 = ({ onPrevious, onNext }) => {
  const dispatch = useDispatch();
  // const userData = useSelector((state) => state.userData);
  // const selectedPlan = useSelector((state) => state.selectedPlan);
  // const selectedAddons = useSelector((state) => state.selectedAddons);

  const selectedPlan = useSelector((state) => state.selectedPlan);
  const selectedAddons = useSelector((state) => state.selectedAddons);

  const calculateTotal = () => {
    let total = 9;

    if (selectedAddons.checkbox1) {
      total += 1;
    }

    if (selectedAddons.checkbox2) {
      total += 2;
    }
    if (selectedAddons.checkbox3) {
      total += 2;
    }

    return total;
  };

  const handleConfirm = () => {
    
    dispatch(setUserData({})); 
    dispatch(setSelectedPlan(null));
    dispatch(setSelectedAddons({})); 
  
    
    onNext();
    // console.log("setUserData=>",userData)
  };


  return (
    <div className="step-text">
      <h2>Step 4: Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div>
        <ul className="custom-list">
          <div className="uperr-li">
            <li className="bordered-item">
              <h2>{selectedPlan} (Monthly)</h2>
              <p>$9/mo</p>
            </li>
            {selectedAddons.checkbox1 && (
              <li className="bordered-item">
                <h3>Online service</h3>
                <p>$1/mo</p>
              </li>
            )}
            {selectedAddons.checkbox2 && (
              <li className="bordered-item">
                <h3>Larger storage</h3>
                <p>$2/mo</p>
              </li>
            )}
            {selectedAddons.checkbox3 && (
              <li className="bordered-item">
                <h3>Customizable Profile</h3>
                <p>$2/mo</p>
              </li>
            )}
          </div>
          <li className="last-item">
            <h3>Total(per month)</h3>
            <p>${calculateTotal()}</p>
          </li>
        </ul>
      </div>
      <div className="last-button">
        <button onClick={onPrevious}>Back</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Step4;
