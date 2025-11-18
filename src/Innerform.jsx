import React from "react";
import "./index.css";
import Jobform from "./Jobform";


const Innerform = ({
  step,
  handleChange,
  handleNext,
  handleBack,
  handleSubmit,
  errors,
  errorText,
  formData,
  isenable,
}) => {
  console.log(formData);
  return (
    <div class="modaldiv1">
      {step === 2 && (
        <form className="form1">
          <div className="step">
            <div>
              <h3>Create a Job</h3>
            </div>
            <div>
              <h3>Step 2</h3>
            </div>
          </div>
          <label htmlFor="experience">Enter Experience</label>
          <div class="step">
            <input
              className="input1"
              type="number"
              name="minimumexperience"
              onChange={handleChange}
              value={formData.minimumexperience}
              placeholder="Enter Mininum Experience"
            />
            <div>
              <span className="span">{errorText.minimumexperience}</span>
            </div>
            <input
              className="input1"
              type="number"
              name="maximumexperience"
              onChange={handleChange}
              value={formData.maximumexperience}
              placeholder="Enter Maximum Experience"
            />
            <div>
              <span className="span">{errorText.maximumexperience}</span>
            </div>
          </div>
          <label htmlFor="Salary">Enter Salary</label>
          <div class="step">
            <input
              className="input1"
              type="number"
              name="minimumsalary"
              onChange={handleChange}
              value={formData.minimumsalary}
              placeholder="Enter Mininum Salary"
            />
            <div>
              <span className="span">{errorText.minimumsalary}</span>
            </div>
            <div>
              <input
                className="input1"
                type="number"
                name="maximumsalary"
                onChange={handleChange}
                value={formData.maximumsalary}
                placeholder="Enter Maximum Salary"
              />
              <div>
                <span className="span">{errorText.maximumsalary}</span>
              </div>
            </div>
          </div>

          <div className="employees">
            <div>
              <label htmlFor="employees">Enter total no of Employees</label>
            </div>
            <input
              className="input1"
              type="number"
              name="total"
              onChange={handleChange}
              value={formData.total}
              placeholder="Enter no of employees"
            />
            <div>
              <span className="span">{errorText.total}</span>
            </div>
          </div>
          <div className="btndiv">
            <button type="button" className="btn" onClick={handleBack}>
              Back
            </button>
            <button
              type="button"
              className="btn"
              onClick={handleSubmit}
              disabled={!isenable}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Innerform;
