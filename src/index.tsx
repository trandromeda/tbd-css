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
        <Box>
            I'm just a regular Box aka {`<div>`}
        </Box>
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

        <vanilla-example>
          <h1 slot="msgtext">Hi :3</h1>
          <p>I was created from scratch.</p>
        </vanilla-example>

        <lit-example></lit-example>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("app"));

// import { container } from "./index.css";

// const app = document.getElementById("app");
// const containerEl = document.getElementById("container");

// if (app && containerEl) {
//   containerEl.innerHTML = `
//             <h1>TBD CSS</h1>
//             <p class="${blue}">
// Commodo anim enim anim esse id laborum ullamco consectetur cupidatat. Sint irure deserunt nisi nisi consequat eiusmod et exercitation irure reprehenderit exercitation. Cillum eiusmod cillum ipsum minim adipisicing ea aliqua. Ipsum dolore cupidatat velit occaecat nulla esse duis duis cupidatat do mollit cupidatat culpa. Quis dolore elit labore commodo fugiat deserunt adipisicing.

// Duis nostrud laborum consectetur ex mollit et nisi tempor labore. Voluptate nisi sunt velit id cupidatat ad labore veniam cillum fugiat consectetur. Excepteur reprehenderit do irure tempor do veniam nulla dolore. Cupidatat voluptate exercitation laborum non mollit incididunt eu ipsum culpa ut proident nulla est. Deserunt in sit ex ut ut magna tempor aliqua aute aliqua exercitation elit.

// Laboris amet do sunt officia consectetur labore aliqua nisi officia esse laboris elit id. Incididunt voluptate laboris aute dolore ut ex tempor magna. Amet cillum duis ex enim Lorem. Incididunt aute cupidatat dolore irure consectetur quis consequat officia est voluptate ut. In ut excepteur sint irure non id voluptate laborum reprehenderit sunt ea. Et et laboris in laboris aliqua fugiat cillum.
//             </p>
//     `;

//   containerEl.classList.add(...container.split(' '));
// }
