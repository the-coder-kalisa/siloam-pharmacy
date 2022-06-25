import { Button, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginSvg from "../images/login";

const Login: React.FC = () => {
  interface Value {
    email: string;
    password: string;
  }
  const inputs: string[] = ["email", "password"];
  const [values, setValues] = useState<Value | null | any>(null);
  return (
    <div className="h-[100vh] flex gap-10 items-center justify-center">
      <div className="flex flex-col items-center gap-24 h-full min-w-[20rem] justify-center">
        <h1 className="font-bold text-3xl">Siloam pharmacy</h1>

        <LoginSvg />
      </div>
      <form className="flex flex-col min-h-[40rem] min-w-[30rem] gap-5 items-center justify-center bg-[#0A5A64]">
        <div className="font-bold text-white text-3xl flex flex-col items-center text-center">
          <span>Login to</span>
          <span>Siloam pharmacy</span>
        </div>
        {inputs.map((input, index) => (
          <input
            className="bg-white p-3 outline-none"
            key={index}
            onChange={(e) => setValues({ ...values, [input]: e.target.value })}
            placeholder={`${input.at(0)?.toUpperCase()}${input.slice(1)}`}
          />
        ))}
        <div className="flex justify-end w-full">
          <Link to="/forgot">Forgot password?</Link>
        </div>
        <Button variant="contained">Login</Button>
        <Divider>Signup with</Divider>
        <div className="flex justify-center gap-2"></div>
        <div>
          <span className="text-white">Don't have signup yet?</span>
          <Link to="/signup" className="text-blue-400">
            signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
