import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return <div className="container h-[89%] w-full border border-sky-500 flex justify-center items-center bg-gray-700 text-white ">
    
    <form action="" className=" w-3/4 md:w-[45%] h-[50%] md:h-auto px-4 py-7 flex flex-col gap-3 border rounded shadow-zinc-500 shadow-xl">
    <h1 className="text-3xl text-orange-500">Sign Up</h1>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='email address'
            className="border border-sky-500 p-1 w-full rounded text-black"
          />
        </div>
        <div>
            <label htmlFor="email" className="text-sm">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder='Full name'
              className="border border-sky-500 p-1 w-full rounded text-black"
            />
          </div>
        <div>
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='password'
            className="border border-sky-500 p-1 w-full rounded text-black"
          />
      </div>

      <div>
          <label htmlFor="confirm-password" className="text-sm">
            Confirm password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder='Confirm password'
            className="border border-sky-500 p-1 w-full rounded text-black" 
          />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-sky-400 text-white px-4 py-1"
        >
          Sign up
        </button>
        
        <p className=" text-green-400 px-2 py-1 ">
          <Link to="/login">
            Registered | Login
          </Link>
        </p>
      </div>
    </form>
</div>;
}

export default SignUp