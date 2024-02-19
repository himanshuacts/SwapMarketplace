import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

import "./AccountSettings.css"; // Make sure to create a CSS file for styling (AccountSettings.css)

const AccountSettings = () => {
  const navigate = useNavigate();

  // State to store user data and userId
  const [user, setUser] = useState({});
  const [id, setUserId] = useState("");

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("User"));

    if (storedUser) {
      // Set user data to state
      setUser(storedUser);
      console.log("User:", storedUser);
      // Set userId to state
      setUserId(storedUser.id);
      console.log("User ID:", storedUser.id);
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleEditProfile = () => {
    navigate("/update");
  };

  const handleDeleteAccount = async () => {
    try {
      // Simulate an API call to delete the account
      const response = await axios.delete(
        `http://localhost:8080/swapkart/user/${id}`
      );

      if (response.status === 200) {
        // Account deleted successfully
        console.log("Account deleted successfully!");
        // Remove user from local storage
        localStorage.removeItem("User");
        // Redirect to the home page or login page after deletion
        navigate("/");
      } else {
        // Failed to delete account
        console.error("Failed to delete account.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className="container-lg-6">
      <div className="card-header text-center bg-white">
        <h3>Account Settings</h3>
      </div>
      <div className="container-lg-4">
        <div className="row">
          <div className="col-md-3 photo-container text-center">
            <img
              src={`data:image/jpeg;base64,${user.image}`}
              alt="Base64 Image"
              className="img-fluid mb rounded-circle mb-5"
              style={{ height: "150px", width: "150px" }}
            />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <p className="user-info font-weight-bold">Name</p>
                <p className="user-info font-weight-bold">Email</p>
                <p className="user-info font-weight-bold">Phone No</p>
                <p className="user-info font-weight-bold">City</p>
              </div>
              <div className="col-md-8">
                <p className="user-info font-weight-normal text-capitalize">
                  : {user.firstName} {user.lastName}
                </p>
                <p className="user-info font-weight-normal">: {user.emailId}</p>
                <p className="user-info font-weight-normal">: {user.mobile}</p>
                <p className="user-info font-weight-normal">
                  : {user.cityName}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer bg-white d-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={handleEditProfile}>
            Edit Profile
          </button>
          <button className="btn btn-danger" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
