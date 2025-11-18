import React, { useState } from "react";
import "./index.css";
import Innerform from "./Innerform";
import IFvalidation from "./IFvalidation";

const Jobform = ({
  step,
  handleChange,
  isenable,
  handleNext,
  handleClose,
  handleBack,
  handleSubmit,
  errorText,
  errors,
  formData,
}) => {
  console.log(formData, "from job");
  return (
    <div class="modaldiv1">
      {step === 1 && (
        <form action="" className="form1">
          <div className="step">
            <div>
              <h3>Create a Job</h3>
            </div>
            <div>
              <h3>Step 1</h3>
            </div>
          </div>
          <div>
            <label htmlFor="companyname">Enter Company Name</label>
            <input
              className="input2"
              name="companyname"
              onChange={handleChange}
              placeholder="Enter the Company Name"
              value={formData.companyname}
            />
            <span className="span">{errorText?.companyname}</span>
          </div>
          <div>
            <label htmlFor="location">Enter Location</label>
            <input
              className="input2"
              name="location"
              onChange={handleChange}
              placeholder="Enter the Location"
              value={formData.location}
            />
            <span className="span">{errorText.location}</span>
          </div>

          <div>
            <label htmlFor="jobname">Enter Job Name</label>
            <input
              className="input2"
              name="jobname"
              onChange={handleChange}
              placeholder="Enter the Job Name"
              value={formData.jobname}
            />
            <span className="span">{errorText.jobname}</span>
          </div>
          <div className="btndiv">
            <button type="button" className="btn" onClick={handleClose}>
              Back
            </button>
            <button
              type="button"
              className="btn next"
              onClick={handleNext}
              disabled={!isenable}
            >
              Next
            </button>
          </div>
        </form>
      )}

      {/* {step === 2 && (
          <form className="form1">
            <label htmlFor="companyname">Enter Experience</label>
            <input
              class="input1"
              onChange={handleChange}
              placeholder="Enter the Experience"
            />
            <label htmlFor="companyname">Enter Salary</label>
            <input
              class="input1"
              onChange={handleChange}
              placeholder="Enter the Salary"
            />
            <label htmlFor="companyname">Enter total no of Employees</label>
            <input
              class="input1"
              onChange={handleChange}
              placeholder="Enter total no of employees"
            />
            <button type="button" onClick={handleBack}>
              Back
            </button>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        )} */}
      <Innerform
        step={step}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={handleSubmit}
        Jobform={Jobform}
        formData={{formData
        }}
        errors={errors}
        errorText={errorText}
        isenable={isenable}
        // errorText={errors}
      />
    </div>
  );
};

export default Jobform;
