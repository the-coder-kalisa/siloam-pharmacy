import { Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginSvg from "../images/login";

const Login: React.FC = () => {
  interface Value {
    email: string;
    password: string;
  }
  const inputs: string[] = ["email", "password"];
  const [values, setValues] = useState<Value | null>(null);
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl">Siloam pharmacy</h1>
        <LoginSvg />
      </div>
      <form className="flex flex-col items-center justify-center bg-[#0A5A64]">
        <h1 className="font-bold text-white text-3xl">
          Login to Siloam pharmacy
        </h1>
        {inputs.map((input, index) => (
          <TextField
            onChange={(e) => setValues({ ...values, [input]: e.target.value })}
            label={`${input.at(0)?.toUpperCase()}${input.slice(1)}`}
          />
        ))}
        <div className="flex justify-end w-full">
          <Link to="/forgot">Forgot password?</Link>
        </div>
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
