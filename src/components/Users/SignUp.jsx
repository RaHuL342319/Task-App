import React, { useState } from "react";
import validateField from "../../utils/Validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/user/userSlice";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  country: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialForm);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  //   console.log(users);
  const handleChange = (event) => {
    var fieldValue;
    const { name, value, type } = event.target;

    // checking the type of inputs is radio.
    if (type === "radio") {
      // setting radio button data into fieldValue
      fieldValue = value;
    } else {
      fieldValue = value.trim();
    }

    // Updating the form data with new value from each input.
    setFormData({ ...formData, [name]: fieldValue });

    //Validates the field by calling the validateField function from the Validate.js file, and passing the field name, value, and current form data.
    const error = validateField(name, fieldValue, formData);

    //The resulting error message is then stored in the formErrors state variable.
    setFormErrors({ ...formErrors, [name]: error });
  };
  //   console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = {};
    //Validates all form fields by calling validateField for each field and storing the resulting error messages in a new object newFormErrors.
    Object.keys(formData).forEach((fieldName) => {
      newFormErrors[fieldName] = validateField(
        fieldName,
        formData[fieldName],
        formData
      );
    });
    setFormErrors(newFormErrors);
    //If any of the fields have errors, the form submission is aborted.
    if (Object.values(newFormErrors).some((error) => error)) {
      toast.error("Some Error occured");
      return;
    }
    dispatch(addUser(formData));

    setFormData(initialForm);
    setFormErrors({});
    navigate("/login");
  };

  return (
    <div className="w-full h-[90%]  border-sky-500 flex justify-center items-center bg-gray-800">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-2/3 border border-black flex flex-col gap-1 p-2 bg-white text-black m-2"
      >
        <h1 className="text-3xl text-center font-bold">Registration Form</h1>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Name:
          </label>
          <input
            type="text"
            className=" border-sky-300 p-2 rounded border text-black"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          {/* Checking whether the  formError is set for email field, if set displaying the corresponding error message using conditional rendering*/}
          {formErrors.name && (
            <span className="text-red-500">{formErrors.name}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            type="email"
            className="p-2 rounded border border-sky-300 text-black"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          {/* Checking whether the  formError is set for email field, if set displaying the corresponding error message using conditional rendering*/}
          {formErrors.email && (
            <span className="text-red-500">{formErrors.email}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            type="password"
            className="p-2 rounded border border-sky-300 text-black"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          {/* Checking whether the  formError is set for email field, if set displaying the corresponding error message using conditional rendering*/}
          {formErrors.password && (
            <span className="text-red-500">{formErrors.password}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="font-semibold">
            Confirm Password:
          </label>
          <input
            type="password"
            className="p-2 rounded border border-sky-300 text-black"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          {/* Checking whether the  formError is set for email field, if set displaying the corresponding error message using conditional rendering*/}
          {formErrors.confirmPassword && (
            <span className="text-red-500">{formErrors.confirmPassword}</span>
          )}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Gender:</p>
          <div className="flex justify-evenly">
            <label htmlFor="male" className="font-medium">
              Male
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"} // Bind selection state
              onChange={handleChange}
            />
            <label htmlFor="female" className="font-medium">
              Female
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"} // Bind selection state
              onChange={handleChange}
            />
            <label htmlFor="other" className="font-medium">
              Other
            </label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={formData.gender === "other"} // Bind selection state
              onChange={handleChange}
            />
          </div>
          {/* Checking whether the  formError is set for gender field, if set displaying the corresponding error message using conditional rendering*/}
          {formErrors.gender && (
            <span className="text-red-500">{formErrors.gender}</span>
          )}
        </div>

        <div className="flex flex-col w-1/4">
          <h1 className="font-bold">Country:</h1>
          <select
            name="country"
            className="border border-sky-300 p-2 text-black"
            onChange={handleChange}
            value={formData.country}
          >
            <option value="">---Select a Country---</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="usa">USA</option>
            <option value="new zealand">New Zealand</option>
            <option value="south africa">South Africa</option>
          </select>
          {/* Checking whether the  formError is set for country field, if set, displaying the corresponding error message using conditional rendering*/}
          {formErrors.country && (
            <span className="text-red-500">{formErrors.country}</span>
          )}
        </div>

        <div className="flex justify-between">
          <button type="submit" className="bg-sky-400 text-white w-1/6 py-2">
            Submit
          </button>
          <ToastContainer />
          <Link to="/login">
            <button className="text-green-400">
              Already Registered | Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
