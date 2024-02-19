import React, { useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    mobile: 0,
    rating: 0,
    cityId: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const formDataToSend = new FormData();
    formDataToSend.append(
      "userReqDto",
      JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailId: formData.emailId,
        password: formData.password,
        mobile: formData.mobile,
        rating: formData.rating,
        cityId: parseInt(formData.cityId),
        // "cityId": 1,
      })
    );
    formDataToSend.append("image", formData.image);

    try {
      await axios.post(
        "http://localhost:8080/swapkart/signup",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/signin");
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-center signup-bg-img m-3 pb-5">
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
                name="firstName"
                className="form-control"
                size={25}
                value={formData.firstName}
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
                name="lastName"
                className="form-control"
                size={25}
                value={formData.lastName}
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
                name="emailId"
                className="form-control"
                size={30}
                value={formData.emailId}
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
              <small id="emailHelp" class="form-text text-muted">
                Password must contain atleast one captial letter, one special
                character and one number
              </small>
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
                name="cityId"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                <option value="1">mumbai</option>
                <option value="2">pune</option>
                <option value="3">nagpur</option>
                <option value="4">delhi</option>

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
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </form>
        </div>
        <div class="card-footer bg-white d-flex justify-content-around">
          <button type="submit" class="btn btn-success" onClick={handleSubmit}>
            Sign Up
          </button>
          <Link to="/">
            <button type="button" class="btn btn-danger">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
