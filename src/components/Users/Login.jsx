import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validateField from "../../utils/Validate";
import { useSelector } from "react-redux";

let initialData = {
  email: "",
  password: "",
};
const Login = () => {
  const [loginForm, setLoginForm] = useState(initialData);
  const [loginFormErrors, setLoginFormErrors] = useState(initialData);

  const users = useSelector((store) => store.user.data);

  const navigate = useNavigate();
  // console.log(users);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // setting the data
    setLoginForm({ ...loginForm, [name]: value });

    // validate the form
    let error = validateField(name, value, loginForm);
    setLoginFormErrors({ ...loginFormErrors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = {};
    //Validates all form fields by calling validateField for each field and storing the resulting error messages in a new object newFormErrors.
    Object.keys(loginForm).forEach((fieldName) => {
      newFormErrors[fieldName] = validateField(
        fieldName,
        loginForm[fieldName],
        loginForm
      );
    });

    setLoginFormErrors(newFormErrors);
    //If any of the fields have errors, the form submission is aborted.
    if (Object.values(newFormErrors).some((error) => error)) {
      toast.error("Some Error occured");
      return;
    }

    // user exists in db or not checking
    const user = users.find(({ email }) => email === loginForm.email);
    if (!user) {
      setLoginFormErrors({ ...loginFormErrors, email: "User doesn't exists" });
      //   alert("User doesn't exists");
    } else if (user.password !== loginForm.password) {
      setLoginFormErrors({
        ...loginFormErrors,
        password: "Password Incorrect",
      });
      //   alert("Password Incorrect");
    } else {
      alert("login Successfully");
      navigate("/");
    }
  };

  return (
    <div className="container h-[89%] w-full border border-sky-500 flex justify-center items-center bg-gray-800 ">
      <form
        action=""
        className=" w-3/4 md:w-[40%]  px-4 py-7 flex flex-col gap-4 md:gap-3 border rounded bg-zinc-200 text-black shadow-zinc-500 shadow-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-rose-600">Login</h1>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email address"
            className="border border-sky-300 p-1 w-full rounded"
            onChange={handleChange}
          />
          {loginFormErrors.email && (
            <span className="text-red-500">{loginFormErrors.email}</span>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border border-sky-300 p-1 w-full rounded"
            onChange={handleChange}
          />
          {loginFormErrors.password && (
            <span className="text-red-500">{loginFormErrors.password}</span>
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-sky-400 text-white px-2 py-1 md:px-4 md:py-1 shadow-md shadow-rose-300 rounded"
          >
            Login
          </button>

          <p className=" text-green-600 md:px-2 md:py-1 shadow-amber-50 shadow-lg">
            <Link to="/signup">New User | Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
