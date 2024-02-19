import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import "./SwapWindow.css";
import exchangeProduct from "../../images/exch_prod.jpg";
import axios, { all } from "axios";

const SwapWindow = (props) => {
  const { uid, pid } = useParams();
  const [user, setUser] = useState(null);
  const [userProduct, setUserProduct] = useState();
  const [msgState, setMsgState] = useState();
  const [allMsg, setAllMessage] = useState();
  const [transaction, setTransaction] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from local storage on component mount
    const storedUser = JSON.parse(localStorage.getItem("User"));
    setUser(storedUser);
  }, []);

  const ownerProduct = useSelector((state) => {
    return state.prodList.data.find((prod) => prod.productId == pid);
  });

  const userProducts = useSelector((state) => {
    return state.prodList.data.filter((prod) => prod.user.userId == uid);
  });

  const handleProductChangeEvent = async (event) => {
    const product_id = event.target.value;
    setUserProduct(userProducts.find((prod) => prod.productId == product_id));
    const swapReqDto = {
      userProductId: product_id,
      ownerProductId: ownerProduct.productId
    }
    console.log(swapReqDto);
    try {
      const response = await axios.post(`http://localhost:8080/swapkart/swap/initiate/${user.id}`, swapReqDto);
      console.log(response.data);
      setTransaction(response.data.message);
      console.log(transaction);
    } catch (error) {
      console.log("error initiating swap.." + error);
    }
  };

  const handleSwapProduct = async () => {
    console.log(transaction);
    try {
      const response = await axios.post('http://localhost:8080/swapkart/swap/complete', null, {
        params: {
          transactionId: parseInt(transaction)
        }
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.log("Could not complete transaction.." + error);
    }

  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(
          `http://localhost:8080/swapkart/chat/new-message/${uid}/${ownerProduct.user.userId}`
        )
        .then((res) => {
          setAllMessage(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMessageEvent = (e) => {
    setMsgState(e.target.value);
  };

  const handleSendMessageHandler = () => {
    axios
      .post("http://localhost:8080/swapkart/chat/new-message", {
        userId: uid,
        ownerId: ownerProduct.user.userId,
        message: msgState,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setMsgState("");
  };

  useEffect(() => { }, [ownerProduct, userProducts, userProduct]);

  return (
    <div className="container-fluid d-flex justify-content-center ">
      <div
        className="Card w-50 bg-white shadow-sm mt-4"
        style={{ borderRadius: "10px" }}
      >
        <div className="card-header d-flex align-items-center ">
          <img
            src={`data:image/jpeg;base64,${ownerProduct.user.userImage}`}
            alt="owner-img"
            className="rounded-circle mr-3"
            style={{ width: "30px", height: "30px" }}
          />
          <span style={{ "font-weight": "500" }}>
            {ownerProduct.user.firstName} {ownerProduct.user.lastName}
          </span>
        </div>
        <div className="card-body d-flex justify-content-between align-items-center ">
          <div className="user-swap-product">
            <span style={{ fontSize: "20px", fontWeight: "700" }}>
              User Product
            </span>
            {userProduct && (
              <div className="user-swap-prod-info d-flex align-items-center mt-2">
                <img
                  src={`data:image/jpeg;base64,${userProduct.firstImage}`}
                  alt="owner-img"
                  className="rounded-circle mr-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="user-prod-desc-title d-flex flex-column">
                  <span style={{ fontWeight: "600" }}>
                    {userProduct.productName}
                  </span>
                  <span className="product-desc">
                    {userProduct.productDescription}
                  </span>
                </div>
              </div>
            )}
          </div>
          <img
            src={exchangeProduct}
            alt="swap-img"
            style={{ height: "70px", width: "70px" }}
          />
          <div className="owner-swap-product d-flex flex-column">
            <span
              style={{ fontSize: "20px", fontWeight: "700", textAlign: "end" }}
            >
              Owner Product
            </span>
            <div className="user-swap-prod-info d-flex align-items-center mt-2">
              <div className="user-prod-desc-title d-flex flex-column align-items-end">
                <span style={{ fontWeight: "600" }}>
                  {ownerProduct.productName}
                </span>
                <span className="product-desc">
                  {ownerProduct.productDescription}
                </span>
              </div>
              <img
                src={`data:image/jpeg;base64,${ownerProduct.firstImage}`}
                alt="owner-img"
                className="rounded-circle ml-3"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </div>
        </div>
        <div className="card-footer d-flex flex-column align-items-start">
          <div>
            <select
              className="form-control border-0"
              id="exampleFormControlSelect1"
              onChange={handleProductChangeEvent}
            >
              <option style={{ fontWeight: "500" }}>Select Product</option>
              {userProducts.map((product) => (
                <option style={{ fontWeight: "500" }} value={product.productId}>
                  <img
                    src={`data:image/jpeg;base64,${product.firstImage}`}
                    alt="owner-img"
                    className="rounded-circle mr-3"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <span style={{ "font-weight": "400" }}>
                    {product.productName}
                  </span>
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <div className="card mt-4 p-0 w-75" style={{ height: "250px" }}>
              <div
                className="card-body d-flex flex-column"
                style={{ "overflow-y": "hidden", height: "150px" }}
              >
                {allMsg
                  ? allMsg.map((msg) => <span>{msg.message}</span>)
                  : "No Message Yet!!!"}
              </div>
              <div className="card-footer p-0 d-flex justify-content-between align-items-center">
                <input
                  type="text"
                  className="border-0 pl-3 m-0 w-75"
                  id="formGroupExampleInput"
                  placeholder="Write Message..."
                  style={{ outline: "none" }}
                  value={msgState}
                  onChange={handleMessageEvent}
                />
                <IoSend
                  className="bg-success text-white m-0 rounded-circle mr-4"
                  style={{
                    fontSize: "40px",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleSendMessageHandler}
                />
              </div>
            </div>
            <button className="btn btn-primary mt-4" onClick={handleSwapProduct}>Swap Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapWindow;
