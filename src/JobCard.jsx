import React from "react";
import "./index.css";

function JobCard(props) {
  return (
    <div className="job1">
      <div className="job1-first">
        <img
          src="https://imgcdn.stablediffusionweb.com/2024/5/12/9c27c033-1d62-4b86-88cf-b4699a135081.jpg"
          height="60px"
          width="60px"
        />
      </div>
      <div className="job1-second">
        <p>Company Name: {props.companyname}</p>
        <p>Location: {props.location}</p>
        <p>Job Name: {props.jobname}</p>
        <p>Minimum Experience: {props.minimumexperience}</p>
        <p>Maximum Experience: {props.maximumexperience}</p>
        <p>Minimum Salary: {props.minimumsalary}</p>
        <p>Maximum Salary: {props.maximumsalary}</p>
        <p>Total Employee: {props.total}</p>

        <div className="apply">Apply Job</div>
      </div>
    </div>
  );
}

export default JobCard;
