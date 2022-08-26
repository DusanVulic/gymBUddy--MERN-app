import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="login" onClick={handleSubmit}>
      <h3>login</h3>
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
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
