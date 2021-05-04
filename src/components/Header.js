import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 100,
  },
  header: {
    padding: "30px 20px",
    backgroundColor: "#F7F6F6",
    boxShadow: " -1px 7px 9px -9px rgba(0,0,0,0.75)",
    overflow: "hidden",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.header}>
      <Grid container xl={12}>
        <Typography variant="h5" color="textPrimary">
          Buy IT!
        </Typography>
      </Grid>
    </Container>
  );
};

export default Header;
