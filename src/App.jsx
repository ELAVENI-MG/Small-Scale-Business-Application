import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import "./index.css";
import Modal from "./Modal";
import Jobform from "./Jobform";
import IFvalidation from "./IFvalidation";


function App() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [formData, setformData] = useState({
    companyname: " ",
    location: " ",
    jobname: " ",
    minimumexperience: " ",
    maximumexperience: " ",
    minimumsalary: " ",
    maximumsalary: " ",
    total: " ",
  });

  console.log(formData, "form");

  const [isenable, setisenable] = useState(false);

  const [errorText, setErrorText] = useState("");
  const [errors, seterrors] = useState({
    location: "",
    companyname: "",
    jobname: "",
    minimumexperience: " ",
    maximumexperience: " ",
    minimumsalary: " ",
    maximumsalary: " ",
    total: " ",
  });

  const validate = () => {
    const required1 = ["companyname", "location", "jobname"];
    const required2 = ["minimumexperience,maximumexperience,minimumsalary,maximumsalary,total,"]
   

    let isvalid1 = required1.every(
      (field) => formData[field] !== " " && !errors[field]
    );

     let isvalid2 = required2.every(
       (field) => formData[field] !== " " && !errors[field]
     );

    // required.forEach((field)=>{
    //   if(!formData[field] || errors[field])
    //   {
    //     isvalid=false;
    //   }
    //   else
    //   {
    //     isvalid=true;
    //   }
    // })


    setisenable(isvalid1 && isvalid2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, typeof value);

    setformData({ ...formData, [name]: value });

    if(["companyname","location","jobname"].includes(name)){
    if (!value.match(/^[a-zA-Z\s]+$/)) {
      seterrors((state) => {
        return { ...state, [name]: "Enter Characters only" };
      });
    } else {
      seterrors((state) => {
        return { ...state, [name]: "" };
      });
    }
  }

  if(["minimumexperience","maximumexperience"].includes(name)){
    if(parseInt(formData.minimumexperience) >= parseInt(formData.maximumexperience)){
      seterrors((state) => ({
        ...state,
        maximumexperience:"Max experience must be greater than mini experience",
      }))
    }
    else
    {
      seterrors((state) => ({
        ...state,
        maximumexperience:" ",
      }))
    }
  }
  
  if (["minimumsalary", "maximumsalary"].includes(name)) {
    if (
      parseInt(formData.minimumsalary) >=
      parseInt(formData.maximumsalary)
    ) {
      seterrors((state) => ({
        ...state,
        maximumsalary:
          "Max salary must be greater than mini salary",
      }));
    } else {
      seterrors((state) => ({
        ...state,
        maximumsalary: " ",
      }));
    }
  }

    validate();
 
  };

  const handleNext = () => {
    if (isenable) {
      setformData({ ...formData });
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // useEffect(() => {
  
  // const savedJobs = localStorage.getItem("jobs");
  // if(savedJobs)
  // {
  //   setNewArray(JSON.parse(savedJobs));
  // }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  //   const newJob = {
  //       companyname: formData.companyname,
  //       location: formData.location,
  //       jobname: formData.jobname,
  //       minimumexperience: formData.minimumexperience,
  //       maximumexperience: formData.maximumexperience,
  //       minimumsalary: formData.minimumsalary,
  //       maximumsalary: formData.maximumsalary,
  //       total: formData.total,
  // }

  // setNewArray((prevArray) => {
  //   const updatedArray = [...prevArray,newJob];

  //   localStorage.setItem("jobs",JSON.stringify(updatedArray));

  //   return updatedArray;
  // })
  setNewArray((prevArray) => [
      ...prevArray,
      {
        companyname: formData.companyname,
        location: formData.location,
        jobname: formData.jobname,
        minimumexperience: formData.minimumexperience,
        maximumexperience: formData.maximumexperience,
        minimumsalary: formData.minimumsalary,
        maximumsalary: formData.maximumsalary,
        total: formData.total,
      },
    ]);

    setformData({
      companyname: " ",
      location: " ",
      jobname: " ",
      minimumexperience: " ",
      maximumexperience: " ",
      minimumsalary: " ",
      maximumsalary: " ",
      total: " ",
    });

    setOpen(false);
    setStep(1);
  };

  const handleClose = () => {
    setOpen(false);
    setStep(1);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const jobData = [
    {
      companyname: "Tailoring-Artsy",
      location: "Chennai, Tamilnadu, India",
      jobname: "Tailoring",
      minimumexperience: "10",
      maximumexperience: "15",
      minimumsalary: "5000",
      maximumsalary: "10000",
      total: "25",
    },
    {
      companyname: "Catering Mela",
      location: "Chennai, Tamilnadu, India",
      jobname: "Catering",
      minimumexperience: "15",
      maximumexperience: "25",
      minimumsalary: "50000",
      maximumsalary: "60000",
      total: "75",
    },
    {
      companyname: "Decor Spring",
      location: "Chennai, Tamilnadu, India",
      jobname: "Home Decor",
      minimumexperience: "7",
      maximumexperience: "10",
      minimumsalary: "30000",
      maximumsalary: "45000",
      total: "85",
    },
    {
      companyname: "Wellness Spa",
      location: "Chennai, Tamilnadu, India",
      jobname: "Spa",
      minimumexperience: "10",
      maximumexperience: "20",
      minimumsalary: "15000",
      maximumsalary: "35000",
      total: "65",
    },
  ];
  const [newArray, setNewArray] = useState([]);
  useEffect(() => {
    setNewArray();
    let jobData1 = [
      {
        companyname: "Artistspecial",
        location: "Chennai, Tamilnadu, India",
        jobname: "Artist",
        minimumexperience: "15",
        maximumexperience: "25",
        minimumsalary: "6000",
        maximumsalary: "20000",
        total: "25",
      },
    ];
    
    setNewArray([...jobData1, ...jobData]);

  }, []);

  return (
    <>
      <div className="bodyparent">
        <div className="parent">
          <div className="div1">
            <h1>Small Scale Business</h1>
          </div>
          <div className="div2">
            <button className="apply" onClick={handleOpen}>
              Add Job
            </button>
          </div>
        </div>

        <div className="jobcard1">
          {/* <JobCard
            companyname="Tailoring-Artsy"
            location="Chennai,Tamilnadu,India"
            jobname="Tailoring"
            experience="0-15"
            salary="5000-10000"
            total="25"
          />

          <JobCard
            companyname="Catering Mela"
            location="Chennai,Tamilnadu,India"
            jobname="Catering"
            experience="15-25"
            salary="50000-60000"
            total="75"
          />
      </div>
      <div className="jobcard2">
          <JobCard
            companyname="Decor Spring"
            location="Madhurai,Tamilnadu,India"
            jobname="Home Decor"
            experience="7-10"
            salary="30000-45000"
            total="85"
          />
          <JobCard
            companyname="Wellness Spa"
            location="Madhurai,Tamilnadu,India"
            jobname="Spa"
            experience="10-20"
            salary="15000-30000"
            total="65"
          /> */}
          {newArray?.map((job, index) => (
          // {jobData.map((job, index) => (
            <JobCard
              key={index}
              companyname={job.companyname}
              location={job.location}
              jobname={job.jobname}
              minimumexperience={job.minimumexperience}
              maximumexperience={job.maximumexperience}
              minimumsalary={job.minimumsalary}
              maximumsalary={job.maximumsalary}
              total={job.total}
            />
          ))}
        </div>
        <div>
          <Modal isOpen={open} onClose={handleClose}>
            <>
              <Jobform
                step={step}
                formData={formData}
                isenable={isenable}
                handleChange={handleChange}
                handleClose={handleClose}
                handleNext={handleNext}
                handleBack={handleBack}
                handleSubmit={handleSubmit}
                errorText={errors}
                // errors={errors}
              />
            </>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default App;
