import React, { useContext, useState } from "react";
import { RapperContent} from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(RapperContent);

  // login function

  return (
    <div className="   w-full mt-32 mb-44">
      <div className="flex w-full items-center flex-col  justify-center">
        <div className=" text-center w-full mt-40">
          <h1 className=" text-3xl font-medium text-white">Verify identity</h1>
          <p className=" text-white pt-6">A verification code has been send to your <span className="font-bold cursor-pointer">Email Address</span></p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
         
          }}
          className=" w-full lg:w-1/3 p-2 lg:p-0 pt-5"
        >
           <div className=" flex flex-col gap-2 pt-6">
              <p className=" text-white text-sm">Enter OTP</p>
              <input
                required
        
                type="text"
                className=" py-3 px-2 text-base border rounded-md font-normal outline-none text-white placeholder:text-gray-400 bg-transparent  "
                placeholder="123456"
              />
            </div>

      

          <button
            type="submit"
            className=" py-3 flex items-center justify-center text-white bg-pr rounded-md w-full mt-5 hover:bg-green-600"
          >
           Verify
          </button>
          <p className=" text-white pt-6">Didn’t receive the code? <span className="font-bold cursor-pointer">Resend OTP</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
