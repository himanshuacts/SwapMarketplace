import React, { useState } from "react";
import "./signUp.css";
function LogInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="d-flex justify-content-center align-center signup-bg-img m-3 mt-3 pb-5">
      <div class="card p-4 shadow-sm mt-5 signup-container">
        <div class="card-header bg-white">
          <h3>Log In</h3>
        </div>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" class="signup-label ">
                Email:
              </label>
              &nbsp;&nbsp;
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                size={30}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" class="signup-label ">
                Password:
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                size={25}
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
        <div class="card-footer bg-white d-flex justify-content-around">
          <button type="submit" class="btn btn-success">
            Log In
          </button>
          <button type="button" class="btn btn-primary" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInForm;
