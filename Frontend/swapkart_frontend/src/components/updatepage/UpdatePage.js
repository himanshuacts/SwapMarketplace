import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdatePage.css';

const UpdatePage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        cityName: '',
        mobile: '',
        image: '',
    });

    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    // Assume user data is stored in localStorage after signup or login
    useEffect(() => {
        // Fetch user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('User'));

        if (storedUser) {
            // Set existing values to state
            setFormData({
                ...formData,
                firstName: storedUser.firstName || '',
                lastName: storedUser.lastName || '',
                emailId: storedUser.emailId || '',
                cityName: storedUser.cityName || '',
                mobile: storedUser.mobile || '',
                image: storedUser.image || '',
            });
        }
        console.log(storedUser);
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData({
                ...formData,
                image: reader.result, // Use reader.result instead of the file itself
            });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleEditImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleCancel = () => {
        // Reset form fields and close edit mode if an image is selected
        setFormData({
            ...formData,
            image: '',
            firstName: '',
            lastName: '',
            emailId: '',
            cityName: '',
            mobile: '',
        });
        navigate('/account');
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // Fetch userId from stored user data
            const storedUser = JSON.parse(localStorage.getItem('User'));
            const userId = storedUser.id; // Adjust accordingly based on your data structure
            console.log(storedUser);
            console.log(userId);

            // Simulate an API call to the backend using Axios
            const formDataToSend = new FormData();
            formDataToSend.append('userReqDto', JSON.stringify({
                "firstName": formData.firstName,
                "lastName": formData.lastName,
                "emailId": formData.emailId,
                "mobile": formData.mobile,
                "cityId": 1, // Set the cityId based on your requirements
            }));
            formDataToSend.append("file", formData.image);

            const response = await axios.put(`http://localhost:8080/swapkart/edit/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log(response);

            // If the response is successful then set the User in local storage to the latest value
            // Otherwise, indicate that the user could not be updated

            // Update the user information in localStorage
            const updatedUser = {
                userId: storedUser.userId, // Ensure userId is preserved
                firstName: formData.firstName,
                lastName: formData.lastName,
                emailId: formData.emailId,
                cityName: formData.cityName,
                mobile: formData.mobile,
                image: formData.image,
            };
            console.log(userId);
            localStorage.setItem('User', JSON.stringify(updatedUser));
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
                        <img src={formData.image} alt="User Image" className='img-fluid' />
                        <div className="overlay">
                            <label htmlFor="imageInput" className="camera-icon" onClick={handleEditImage}>
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
                    <input type="text" className="form-control" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Last Name</label>
                    <input type="text" className="form-control" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Email</label>
                    <input type="email" className="form-control" value={formData.emailId} onChange={(e) => setFormData({ ...formData, emailId: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">City</label>
                    <input type="text" className="form-control" value={formData.cityName} onChange={(e) => setFormData({ ...formData, cityName: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Mobile Number</label>
                    <input type="tel" className="form-control" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-danger" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type='button' className="btn btn-primary" onClick={handleUpdate}>
                        Update Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePage;
