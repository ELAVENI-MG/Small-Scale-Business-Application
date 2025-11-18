import {useState,useEffect} from "react";


const IFvalidation = ()=>{  
const [errorText, setErrorText] = useState("");
const [errors, seterrors] = useState({
  minimumexperience: "",
  maximumexperience: "",
  minimumsalary: "",
  maximumsalary: "",
  total: "",
});
const [isenable, setisenable] = useState(false);
const [formData, setformData] = useState({
  minimumexperience: "",
  maximumexperience: "",
  minimumsalary: "",
  maximumsalary: "",
  total: "",
});


  const validate = () => {
    const required = [
      "minimumexperience",
      "maximumexperience",
      "minimumsalary",
      "maximumsalary",
      "totalEmployees",
    ];
    let isvalid = required.every(
      (field) => formData[field] !== " " && !errors[field]
    )
    setisenable(isvalid);
  }

  }

    const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, typeof value);

    setformData({ ...formData, [name]: value });
      
    if (
      name === "total" ||
      name.includes("experience") ||
      name.includes("salary")
    ) {
      if (isNaN(value) || value.trim() === " ") {
        seterrors((state) => {
          return { ...state, [name]: "Enter valid number" };
        });
      } else {
        seterrors((state) => {
          return { ...state, [name]: "" };
        });
      }
    } 
    else {
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
    useEffect(()=>{
      validate();
    },[formData,errors])

    return {handleChange,formData,errors,isenable};
    
  };


export default IFvalidation;