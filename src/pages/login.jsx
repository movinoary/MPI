import React, { useContext, useEffect, useState } from "react";
import * as cssModule from "../sass/index";
import * as Configs from "../configs/index";

const Login = () => {
  const [state, dispatch] = useContext(Configs.UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = e => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    dispatch({
      type: "LOGIN SUCCESS",
      payload: data,
    });
  };

  useEffect(() => {
    console.log(state.isLogin);
  });

  return (
    <section className={cssModule.Page.loginPage}>
      <div className={cssModule.Page.loginContent}>
        <h1>Login</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username..."
            onChange={event => {
              setUsername(event.target.value);
            }}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            onChange={event => {
              setPassword(event.target.value);
            }}
            pattern="[A-Za-z0-9]{6,}"
            title="Minimal 6 Character"
            required
          />
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
