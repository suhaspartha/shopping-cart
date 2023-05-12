import { useEffect, useState } from "react";
import Item from "../components/Item/Item";
import Navbar from "../components/Navbar/Navbar";

import Grid from "@mui/material/Grid";

const Home = ({ welcome }) => {
  const itemsURL = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(itemsURL)
      .then((result) => result.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid key={item.id} xs={3}>
              <Item {...item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Home;
