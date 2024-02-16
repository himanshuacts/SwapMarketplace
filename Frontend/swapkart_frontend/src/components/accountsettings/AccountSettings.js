
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountSettings.css'; // Create a CSS file for styling (AccountSettings.css)

const AccountSettings = ({ user }) => {
    const navigate = useNavigate();



    const handleEditProfile = () => {
        navigate('/update');
    };

    const handleDeleteAccount = async () => {
        try {
            // Simulate an API call to delete the account
            const response = await fetch('/api/deleteAccount', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Pass any necessary data or authentication tokens in the body
                body: JSON.stringify({
                    userId: user.id, // Assuming your user object has an id property
                }),
            });

            if (response.ok) {
                // Account deleted successfully
                console.log('Account deleted successfully!');
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

        <div className="container">
            <div className="card-header text-center">
                <h2>Account Settings</h2>
            </div>

            <div className="row">
                <div className="col-md-3 photo-container text-center">
                    <img src={user.profileImage || 'default-image-url.jpg'} alt="Profile" className="img-fluid mb-3" />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="user-info">
                                <strong>Name</strong>
                            </p>
                            <p className="user-info">
                                <strong>Email</strong>
                            </p>
                            <p className="user-info">
                                <strong>Phone No</strong>
                            </p>
                            <p className="user-info">
                                <strong>City</strong>
                            </p>
                        </div>
                        <div className="col-md-8">
                            <p className="user-info">
                                : {user.firstName} {user.lastName}
                            </p>
                            <p className="user-info">
                                : {user.email}
                            </p>
                            <p className="user-info">
                                : {user.mobileNumber}
                            </p>
                            <p className="user-info">
                                :  {user.city}
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
    );
};

export default AccountSettings;
