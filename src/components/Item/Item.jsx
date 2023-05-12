import React from "react";
import PropTypes from "prop-types";
import "./Item.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = ({ title, price, description, category, image, rating}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia component="img" height="140" image={image} alt="loading..." />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category + " : " + title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description + "\n" + "Price : " + price + "\n" + rating}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.shape({ rate: PropTypes.number, count: PropTypes.number }),
};

Item.defaultProps = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

export default Item;
