import "./styles/reset.css";

import * as React from "react";
import { render } from "react-dom";
import {
  card,
  page,
  img,
  cardContents,
  rating,
  firstCol,
  bold,
} from "./styles/index.css";
import { Box } from "./components/Box";
import "./components/vanilla-example.component";
import "./components/lit-example.component";
import image from "./david-edelstein-N4DbvTUDikw-unsplash.jpg";
import { sprinkles } from "./styles/sprinkles.css";

const title = "Fujiyoshida, Japan";
const region = "Yamanashi Prefecture";
const dates = "Jun. 2-7";
const price = "$1302 CAD";
const unit = "night";
const ratingVal = "4.9";

const App = () => {
  return (
    <div>
      <h1>Neapolitan</h1>

      <div className={page}>
        <Box>I'm just a regular Box aka {`<div>`}</Box>
        <Box as="ul" className="my-list" paddingTop="medium">
          <Box as="li">{`I'm a box that was transformed into a <li>`}</Box>
        </Box>

        <hr></hr>

        <Box className={card}>
          <img src={image} className={img} />
          <Box className={cardContents}>
            <div className={bold}>{title}</div>

            <div className={firstCol}>{region}</div>

            <div className={firstCol}>{dates}</div>

            <div
              className={sprinkles({
                gridColumn: "1 / -1",
                marginTop: "medium",
              })}
            >
              <span className={bold}>{price}</span> {unit}
            </div>

            <span className={rating}>{ratingVal}</span>
          </Box>
        </Box>

        <hr></hr>

        <h2>I'm a vanilla web component</h2>
        <vanilla-example>
          <img slot="image" src={image} alt="Image of palace in Japan" />
          <div slot="title">{title}</div>
          <div slot="region">{region}</div>
          <div slot="dates">{dates}</div>
          <div slot="price">
            {price} {unit}
          </div>
          <div slot="rating">{ratingVal}</div>
        </vanilla-example>

        <hr></hr>

        <h2>I'm a Lit web component</h2>
        <lit-example
          img={image}
          title={title}
          region={region}
          dates={dates}
          price={price}
          rating={ratingVal}
        ></lit-example>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("app"));
