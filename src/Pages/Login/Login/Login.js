import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useFirebase from "../../../Hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle, logOut, user } = useAuth();
  return (
    <div>
      <h2>Please log into your account</h2>
      <br />
      <button className="btn btn-info" onClick={signInUsingGoogle}>
        Sign In Using Google
      </button>
    </div>
  );
};

export default Login;
