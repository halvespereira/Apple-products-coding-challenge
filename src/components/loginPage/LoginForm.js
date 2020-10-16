import React from "react";

import "./LoginForm.scss";

const LoginForm = ({ setEmail, email, password, setPassword, userLogin }) => {
  return (
    <div className="__Login">
      <form>
        <h3>Sign-In</h3>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="user@email.com"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="***********"
        />
        <button onClick={userLogin}>Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
