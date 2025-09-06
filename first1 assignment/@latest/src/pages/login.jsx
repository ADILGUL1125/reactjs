import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // direct form values access
    const gmail = e.target.gmail.value;
    const password = e.target.password.value;

    // console.log("Login Data:", { gmail, password });

    if (!gmail.endsWith("@gmail.com")) {
      alert("Please enter a valid Gmail address!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div className="login"> 
      <div className="loginbox">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <label>Gmail: </label>
              <input type="email" name="gmail" required />
            </div>
            <div>
              <label>Password: </label>
              <input type="password" name="password" required />
            </div>
            <div className="butt"><button type="submit">Login</button></div>
          </form>
      </div>
    </div>
  );
};

export default Login;
