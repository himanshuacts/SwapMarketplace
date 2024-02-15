import React, { useState } from "react";
import "./signUp.css";
function SignUpForm() {
  const [formData, setFormData] = useState({
    image: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile: "",
    city: "",
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

  return (
    <div className="d-flex justify-content-center align-center signup-bg-img m-3">
      <div class="card p-4 shadow-sm mt-5 signup-container">
        <div class="card-header bg-white">
          <h3>Sign Up</h3>
        </div>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fname" class="signup-label ">
                First Name:
              </label>
              &nbsp;
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control"
                size={25}
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lname" class="signup-label ">
                Last Name:
              </label>
              &nbsp;
              <input
                type="text"
                id="lname"
                name="lname"
                className="form-control"
                size={25}
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="confirm_password" class="signup-label ">
                Confirm Password:
              </label>
              &nbsp;
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                className="form-control"
                size={23}
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile" class="signup-label ">
                Mobile No:
              </label>
              &nbsp;&nbsp;
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="form-control"
                size={25}
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city" class="signup-label ">
                City:
              </label>
              &nbsp;&nbsp;
              <select
                id="city"
                name="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                <option value="mumbai">mumbai</option>
                <option value="pune">pune</option>
                <option value="nagpur">nagpur</option>
                <option value="delhi">delhi</option>

                {/* Populate cities dynamically from backend */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="image" class="signup-label ">
                Profile picture:
              </label>
              &nbsp;
              <input
                type="file"
                id="image"
                name="image"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div class="card-footer bg-white d-flex justify-content-around">
          <button type="submit" class="btn btn-success">
            Sign In
          </button>
          <button type="button" class="btn btn-danger">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
