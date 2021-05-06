import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 100,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cardContainer: {
    padding: 15,
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
  card: {
    padding: 10,
    height: "400px",
  },
  cardImage: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: "250px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    margin: 10,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    marginTop: "10px",
  },

  btn: {
    marginTop: "10px",
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
    const { id, category, image, price, title } = product;
    return (
      <Grid
        xs={12}
        sm={12}
        lg={3}
        md={5}
        className={classes.cardContainer}
        key={i}
      >
        <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
          <Card className={classes.card}>
            <div className={classes.cardImage}>
              <img src={image} alt={title} height={200} width={180} />
            </div>
            <CardContent className={classes.cardContent}>
              <Typography align="center" className={classes.title}>
                {title}
              </Typography>
              <Typography>{category}</Typography>
              <Typography style={{ fontWeight: "bold" }}>${price}</Typography>
            </CardContent>
            <CardActions className={classes.btn}>
              <Button size="small" color="primary" variant="contained">
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    );
  });
  return <div className={classes.container}>{renderProducts}</div>;
};

export default ProductsList;
