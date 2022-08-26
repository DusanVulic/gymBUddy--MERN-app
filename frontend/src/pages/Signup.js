import React, { useState } from "react";

import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const { signup, isLoading, isError } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await signup(email, password);
  };

  return (
    <form className="signup" onClick={handleSubmit}>
      <h3>signup</h3>
      <label> email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPasword(e.target.value)}
      />

      <button disabled={isLoading} type="submit">
        submit
      </button>
      {isError && <div className="error"> {isError} </div>}
    </form>
  );
};

export default Signup;
