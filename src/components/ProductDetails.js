import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProducts } from "../redux/actions/productAction";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
}));

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { category, image, title, price, description } = product;
  console.log(product);
  const dispatch = useDispatch();
  const classes = useStyles();

  console.log(productId);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${productId}`,
    }).then((res) => {
      dispatch(selectedProducts(res.data));
      //   console.log(res.data);
    });
  }, [dispatch, productId]);
  return (
    <Container className={classes.container}>
      {Object.keys(product).length === 0 ? (
        <Typography>Loading...</Typography>
      ) : (
        <Paper elevation={3}>
          <Grid container sm={12} className={classes.card}>
            <Grid item={true} sm={6}>
              <img src={image} alt={title} height={450} width={400} />
            </Grid>
            <Divider
              light
              orientation="horizontal"
              component="hr"
              style={{ color: "gray" }}
            />
            <Grid item={true} sm={6}>
              <Typography>{title}</Typography>
              <Typography>{price}</Typography>
              <Typography>{category}</Typography>
              <Typography>{description}</Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
};

export default ProductDetails;
