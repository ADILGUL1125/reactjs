import React from "react";
import './pages.css'
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // direct form values access
    const username = e.target.username.value;
    const gmail = e.target.gmail.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", { username, gmail, password });
    alert("Signup Successful!");
  };

  return (
    <div className="signup">
      <div className="loginbox"  style={{height:"400px"}}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Username: </label>
            <input type="text" name="username" required />
          </div>
          <div>
            <label>Gmail: </label>
            <input type="email" name="gmail" required />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" name="password" required />
          </div>
          <div>
            <label>Confirm Password: </label>
            <input type="password" name="confirm" required />
          </div>
          <div className="butt"><button type="submit">Sign Up</button></div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
