import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginSvg from "../images/login";

function Login() {
  interface Value {
    email: string,
    password: string
  }
  const inputs : string[] = ["email", "password"];
  const [values, setValues] = useState<Value>()
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

        <div>
          <span className="text-white">Don't have signup yet?</span>
          <Link to="/signup">signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
