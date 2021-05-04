import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

const ProductsList = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch(setProducts(res.data));
      })
      .catch((err) => console.log("error aya h"));
  }, [dispatch]);
  return <div>Products</div>;
};

export default ProductsList;
