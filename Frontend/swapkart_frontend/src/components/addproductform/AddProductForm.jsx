import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./AddProductForm.css";

const AddProductForm = () => {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productBrand: "",
    price: "",
    postedDate: formattedDate,
    categoryId: "",
    userId: "",
    firstImage: "",
    secondImage: "",
    thirdImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFirstImageChange = (e) => {
    setFormData({ ...formData, firstImage: e.target.files[0] });
  };

  const handleSecondImageChange = (e) => {
    setFormData({ ...formData, secondImage: e.target.files[0] });
  };

  const handleThirdImageChange = (e) => {
    setFormData({ ...formData, thirdImage: e.target.files[0] });
  };

  const insertProduct = async () => {
    try {
      // Retrieve user details from local storage
      const storedUser = JSON.parse(localStorage.getItem("User"));

      if (storedUser) {
        // Use the user ID from the stored user details
        const userId = storedUser.id; // Update 'userId' to the actual property name in your user object

        // Update the userId in formData.
        formData.userId = userId;
        console.log(formData);

        const formDataToSend = new FormData();
        formDataToSend.append(
          "productReqDTO",
          JSON.stringify({
            productName: formData.productName,
            productDescription: formData.productDescription,
            productBrand: formData.productBrand,
            price: parseInt(formData.price),
            postedDate: formData.postedDate,
            categoryId: parseInt(formData.categoryId),
            userId: parseInt(formData.userId),
          })
        );
        formDataToSend.append("firstImage", formData.firstImage);
        formDataToSend.append("secondImage", formData.secondImage);
        formDataToSend.append("thirdImage", formData.thirdImage);

        try {
          const response = await axios.post(
            `http://localhost:8080/swapkart/products/add`,
            formDataToSend,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response);
          navigate("/MyProducts");
        } catch (error) {
          console.log("Error submitting the form : " + error);
        }
      } else {
        console.error("User details not found in local storage.");
      }
    } catch (error) {
      console.error("Error inserting the product : " + error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertProduct();
    setFormData({
      productName: "",
      productDescription: "",
      productBrand: "",
      price: "",
      postedDate: formattedDate,
      categoryId: "",
      userId: "",
      firstImage: "",
      secondImage: "",
      thirdImage: "",
    });
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card my-product w-50 m-3 mt-5 border-0 shadow-sm">
        <div className="card-header bg-white text-center">
          <h2>Add New Product</h2>
        </div>
        <div className="divider" />
        <form onSubmit={handleSubmit} className="p-2">
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
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              className="form-control"
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="productBrand">Brand</label>
            <input
              type="text"
              className="form-control"
              id="productBrand"
              name="productBrand"
              value={formData.productBrand}
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
            <label htmlFor="categoryId">Category</label>
            <select
              className="form-control"
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            >
              <option value="">--- Select Category ---</option>
              <option value="1">Fashion</option>
              <option value="2">Electronics</option>
              <option value="3">Sports</option>
              <option value="4">Fitness</option>
              <option value="5">Household</option>
              <option value="6">Books</option>
            </select>
          </div>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <div className="form-group">
                    <label htmlFor="firstImage">Upload First Image</label>
                    <input
                      type="file"
                      className="form-control-sm form-control-file"
                      id="firstImage"
                      name="firstImage"
                      onChange={handleFirstImageChange}
                      required
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label htmlFor="secondImage">Upload Second Image</label>
                    <input
                      type="file"
                      className="form-control-sm form-control-file"
                      id="secondImage"
                      name="secondImage"
                      onChange={handleSecondImageChange}
                      required
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label htmlFor="thirdImage">Upload Third Image</label>
                    <input
                      type="file"
                      className="form-control-sm form-control-file"
                      id="thirdImage"
                      name="thirdImage"
                      onChange={handleThirdImageChange}
                      required
                    />
                  </div>
                </td>
              </tr>
            </tbody>
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
