import React, { useState } from "react";
import "./AddProductForm.css";

const AddProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    price: "",
    productDesc: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      productName: "",
      brand: "",
      price: "",
      productDesc: "",
      category: "",
      image: null,
    });
  };

  const handleCancel = () => {
    // Perform action to go back or cancel the current operation
    // For example, you can navigate back to the previous page using window.history.back()
    window.history.back();
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card my-product w-50 m-3 mt-5 border-0 shadow-sm">
        <div className="card-header bg-white">
          <h2>Add your product details</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDesc">Product Description</label>
            <textarea
              className="form-control"
              id="productDesc"
              name="productDesc"
              value={formData.productDesc}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Fashion">Fashion</option>
              <option value="Electronics">Electronics</option>
              <option value="Sports">Sports</option>
              <option value="Fitness">Fitness</option>
              <option value="Household">Household</option>
              <option value="Books">Books</option>
            </select>
          </div>
          <table>
            <tr>
                
          <td>
            <div className="form-group">
                <label htmlFor="image">Upload product Image 1</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  required
                />
              </div>
              </td>
            <td>
                <div className="form-group">
                <label htmlFor="image">Upload product Image 2</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  required
                />
                </div>
                
            </td>
              <td>
              <div className="form-group">
              <label htmlFor="image">Upload product Image 3</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleImageChange}
                required
              />
              </div>
              
             
             </td>
          </tr>
          </table>

          <div className="card-footer bg-white d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
