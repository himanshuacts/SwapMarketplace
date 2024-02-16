import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdatePage.css';

const UpdatePage = () => {
    const [profileImage, setProfileImage] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
            setEditMode(true);
        }
    };

    const handleEditProfileImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleCancel = () => {
        // Reset form fields and close edit mode if an image is selected
        setProfileImage('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setCity('');
        setMobileNumber('');
        setEditMode(false);
        navigate('/account');

    };

    const handleUpdate = async () => {
        try {
            // Simulate an API call to the backend
            const response = await fetch('/api/updateUser', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    profileImage,
                    firstName,
                    lastName,
                    email,
                    city,
                    mobileNumber,
                }),
            });

            if (response.ok) {
                console.log('User information updated successfully!');
            } else {
                console.error('Failed to update user information.');
            }
        } catch (error) {
            console.error('Error updating user information:', error);
        }
    };

    return (
        <div className="container-mt-4">
            <h2>Edit Profile</h2>
            <p>Edit your profile quickly</p>

            {/* Profile Image Section */}
            <div className="row-mb-4">
                <div className="col-md-4 ">
                    <div className="image-container ">
                        <img src={profileImage || 'default-image-url.jpg'} alt="Profile" className="img-fluid" />
                        <div className="overlay">
                            <label htmlFor="imageInput" className="camera-icon" onClick={handleEditProfileImage}>
                                📷
                            </label>
                        </div>
                    </div>
                    <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        ref={fileInputRef}
                    />
                </div>
            </div>

            {/* Form Section */}
            <form>
                <div className="mb-3">
                    <label className="form-label text-dark">First Name</label>
                    <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Last Name</label>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">City</label>
                    <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Mobile Number</label>
                    <input type="tel" className="form-control" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                </div>
                {/* <div className="mb-3">
                    <button type="button" className="btn btn-danger" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary ml-right" onClick={handleUpdate}>
                        Update Now
                    </button>
                </div> */}
                <div className="d-flex justify-content-between align-items-center">

                    <button className="btn btn-danger" onClick={handleCancel}>
                        Cancel
                    </button>

                    <button className="btn btn-primary" onClick={handleCancel}>
                        Update Now
                    </button>
                </div>


            </form>
        </div>
    );
};

export default UpdatePage;
