import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return <div className="container h-[89%] w-full border border-sky-500 flex justify-center items-center bg-gray-800 ">
    
      <form action="" className=" w-3/4 md:w-[45%] md:h-[50%] px-4 py-7 flex flex-col gap-4 md:gap-3 border rounded bg-zinc-200 text-black shadow-zinc-500 shadow-xl">
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
            />
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
            />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-sky-400 text-white px-4 py-1 shadow-md shadow-rose-300 rounded"
          >
            Login
          </button>
          
          <p className=" text-green-600 px-2 py-1 shadow-amber-50 shadow-lg">
            <Link to="/signup">
              New User | Register
            </Link>
          </p>
        </div>
      </form>
  </div>;
};

export default Login;
