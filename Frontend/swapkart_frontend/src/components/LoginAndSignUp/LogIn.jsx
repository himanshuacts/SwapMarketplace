import React, { useEffect, useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function LogInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState()

  const [loginError, setLoginError] = useState(false);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    axios.post('http://localhost:8080/swapkart/signin', {
      email: formData.email,
      password: formData.password
    }).then((res) => {
      setUserData(res.data);
      setLoginError(false);
    }).catch((err) => {
      setLoginError(true);
    });
  }

  useEffect(() => {
    if (userData) {
      localStorage.setItem("User", JSON.stringify(userData));
      navigate("/");
    }

  }, [userData])

  return (
    <div className="d-flex justify-content-center align-center signup-bg-img m-3 mt-3 pb-5">
      <div class="card p-4 shadow-sm mt-5 signup-container">
        <div class="card-header bg-white">
          <h3>Log In</h3>
        </div>
        <div class="card-body">
          {loginError && <div class="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
            Invalid Email or Password
          </div>}
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
          <button type="submit" class="btn btn-success" onClick={handleSubmit}>
            Log In
          </button>
          <Link to="/signup">
            <button type="button" class="btn btn-primary">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogInForm;
