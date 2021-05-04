import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 100,
  },
  card: {
    padding: "30px 20px",
    backgroundColor: "#F7F6F6",
    boxShadow: " -1px 7px 9px -9px rgba(0,0,0,0.75)",
    border: "1px solid black",
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
}));

const ProductsList = () => {
  const classes = useStyles();

  const products = useSelector((state) => state.allProducts.products);
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

  const renderProducts = products.map((product, i) => {
    const { category, image, price, title } = product;
    return (
      <Grid sm={12} lg={3} className={classes.card} key={i}>
        <Typography>{title}</Typography>
      </Grid>
    );
  });
  return <>{renderProducts}</>;
};

export default ProductsList;
