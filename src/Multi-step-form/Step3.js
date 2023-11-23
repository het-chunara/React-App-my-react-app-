import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAddons } from "../Redux-for-form/action1";
import "./step3.css";

const Step3 = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const selectedAddons = useSelector((state) => state.selectedAddons);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    dispatch(setSelectedAddons({ [name]: checked }));
  };

  const isAnyCheckboxChecked = Object.values(selectedAddons).some(
    (checked) => checked
  );

  return (
    <div className="step-text">
      <h2>Step 3: Pick add-ons</h2>
      <p>Add ons help enhance your gaming experience.</p>
      <div>
        <div className="checkbox-list">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              checked={selectedAddons.checkbox1}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox1">
              <div className="step3-h">
                <h2>Online service</h2>
                <p>+$1/mo</p>
              </div>
            </label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              checked={selectedAddons.checkbox2}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox2">
              <div className="step3-h">
                <h2>Larger storage</h2>
                <p>+$2/mo</p>
              </div>
            </label>
          </div>
          <div className="checkbox-item">
            <div className="step3-box">
              <input
                type="checkbox"
                id="checkbox3"
                name="checkbox3"
                checked={selectedAddons.checkbox3}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox3">
                <div className="step3-h">
                  <h2>Customizable Profile</h2>
                  <p>+$2/mo</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="step3-buttton">
        <button onClick={onPrevious}>Back</button>
        <button onClick={onNext} disabled={!isAnyCheckboxChecked}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
