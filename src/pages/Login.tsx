import React from "react";
import LoginSvg from "../images/login";

function Login() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl">Siloam pharmacy</h1>
        <LoginSvg />
      </div>
      <form>
        <h1>Login to Siloam pharmacy</h1>
      </form>
    </div>
  );
}

export default Login;
