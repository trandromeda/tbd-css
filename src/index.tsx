import * as React from "react";
import { render } from "react-dom";
import { container, accentText, responsiveText } from "./index.css";
import { blue } from './accent.css'

console.log(container);

const App = () => {
  return (
    <div className={container}>
        <h1 className={accentText}>TBD</h1>
      <p className={responsiveText}>A bunch of words.</p>
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
