import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProductList } from "../../redux/HomeProducts/Action";
import ProductCard from "../productcard/ProductCard";
import firstProduct from "../../images/firstProduct.jpg";
import secondProduct from "../../images/secondProduct.jpg";
import thirdProduct from "../../images/thirdProduct.jpg";
import "./Category.css";

const Category = () => {
  const dispatch = useDispatch();
  const {cname, cid} = useParams();

  // Get products from Redux store
  const products = useSelector((state) => state.prodList.data);

  useEffect(() => {
    dispatch(fetchProductList()); // Fetch products when component mounts
  }, [dispatch]);

  const [priceRangeFilter, setPriceRangeFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  // Sample data for products (have to replace with actual data)
  // const [products] = useState([
  //   {
  //     id: 1,
  //     img: firstProduct,
  //     prodName: "T-Shirt",
  //     prodDesc: "Pink Color T-Shirt",
  //     owner: "John Kane",
  //     price: 100,
  //     brand: "HP",
  //     city: "Pune",
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     img: secondProduct,
  //     prodName: "Sofa",
  //     prodDesc: "A well furnished sofa",
  //     owner: "John Doe",
  //     price: 200,
  //     brand: "Asus",
  //     city: "Pune",
  //     rating: 4
  //   },
  //   {
  //     id: 3,
  //     img: thirdProduct,
  //     prodName: "Books",
  //     prodDesc: "New books on small short stories",
  //     owner: "Jane Miller",
  //     brand: "Asus",
  //     price: 300,
  //     city: "Delhi",
  //     rating: 2
  //   },
  //   {
  //     id: 3,
  //     img: thirdProduct,
  //     prodName: "Trimmer",
  //     prodDesc: "New trimmer from phillips",
  //     owner: "Michael",
  //     brand: "Phillips",
  //     price: 400,
  //     city: "Mumbai",
  //     rating: 2
  //   }
  // ]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (priceRangeFilter) {
      const [minPrice, maxPrice] = priceRangeFilter.split('-').map(parseFloat);
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    if (brandFilter) {
      filtered = filtered.filter(product => product.productBrand === brandFilter);
    }

    if (cityFilter) {
      filtered = filtered.filter(product => product.user.city.cityName === cityFilter);
    }

    return filtered;
  }, [products, priceRangeFilter, brandFilter, cityFilter]);

  const priceRanges = useMemo(() => {
    const uniquePrices = new Set(products.map(product => product.price));
    const sortedPrices = Array.from(uniquePrices).sort((a, b) => a - b);

    return sortedPrices.map((price, index) => {
      const nextPrice = sortedPrices[index + 1];
      return nextPrice ? `${price}-${nextPrice - 1}` : `${price}+`;
    });
  }, [products]);

  const brands = useMemo(() => {
    const uniqueBrands = new Set(products.map(product => product.productBrand));
    return [].concat(Array.from(uniqueBrands));
  }, [products]);

  const cities = useMemo(() => {
    const uniqueCities = new Set(products.map(product => product.user.city.cityName));
    return [].concat(Array.from(uniqueCities));
  }, [products]);


  return (
    <div className="container-fluid mt-5 mb-3">
      <div className="card" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}>
        <div className="row">
          <div className="col-md-12">
            <header>
              <h2 className="">{cname}</h2>
              <p className="lead">This is going to be the small category description.</p>
            </header>
          </div>
        </div>

        <div className="divider"></div>

        <div className="d-flex justify-content-end">
          <div className="filter-button mx-2">
            <select
              className="form-select btn btn-light"
              id="priceRangeFilter"
              value={priceRangeFilter}
              onChange={(e) => setPriceRangeFilter(e.target.value)}
            >
              <option value="" className="filter-option">All Prices</option>
              {priceRanges.map(priceRange => (
                <option key={priceRange} value={priceRange}>{priceRange}</option>
              ))}
            </select>
          </div>
          <div className="filter-button mx-2">
            <select
              className="form-select btn btn-light"
              id="brandFilter"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div className="filter-button mx-2">
            <select
              className="form-select btn btn-light"
              id="cityFilter"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="products row">
          {filteredProducts.map(product => (
            <div key={product.productId} className="col-md-3">
              <ProductCard
                id={product.productId}
                uid={product.user.userId}
                category={product.category.categoryId}
                img={firstProduct}
                prodName={product.productName}
                prodDesc={product.productDescription}
                prodBrand={product.productBrand}
                price={product.price}
                owner={product.user.firstName + " " + product.user.lastName}
                rating={product.user.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;