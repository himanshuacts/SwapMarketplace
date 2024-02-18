import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

import './AccountSettings.css'; // Make sure to create a CSS file for styling (AccountSettings.css)

const AccountSettings = () => {
    const navigate = useNavigate();

    // State to store user data and userId
    const [user, setUser] = useState({});
    const [id, setUserId] = useState('');

    useEffect(() => {
        // Fetch user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('User'));

        if (storedUser) {
            // Set user data to state
            setUser(storedUser);
            console.log('User:', storedUser);
            // Set userId to state
            setUserId(storedUser.id);
            console.log('User ID:', storedUser.id);
        }
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const handleEditProfile = () => {
        navigate('/update');
    };
    
    const handleDeleteAccount = async () => {
        try {
            // Simulate an API call to delete the account
            const response = await axios.delete(`http://localhost:8080/swapkart/user/${id}`);

            if (response.status === 200) {
                // Account deleted successfully
                console.log('Account deleted successfully!');
                // Remove user from local storage
                localStorage.removeItem('User');
                // Redirect to the home page or login page after deletion
                navigate('/');
            } else {
                // Failed to delete account
                console.error('Failed to delete account.');
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    return (
        <div className="container-lg-6">
            <div className="card-header text-center">
                <h2>Account Settings</h2>
            </div>
            <div className="container-lg-4">
                <div className="row">
                    <div className="col-md-3 photo-container text-center">
                        <img src={user.user_image || 'default-image-url.jpg'} alt="Profile" className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="user-info">
                                    Name
                                </p>
                                <p className="user-info">
                                    Email
                                </p>
                                <p className="user-info">
                                    Phone No
                                </p>
                                <p className="user-info">
                                    City
                                </p>
                            </div>
                            <div className="col-md-8">
                                <p className="user-info">
                                    : {user.firstName} {user.lastName}
                                </p>
                                <p className="user-info">
                                    : {user.emailId}
                                </p>
                                <p className="user-info">
                                    : {user.mobile}
                                </p>
                                <p className="user-info">
                                    : {user.cityName}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary btn-lg" onClick={handleEditProfile}>
                        Edit Profile
                    </button>
                    <button className="btn btn-danger btn-lg" onClick={handleDeleteAccount}>
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
