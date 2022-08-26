import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <button type="submit">submit</button>
    </form>
  );
};

export default Signup;
