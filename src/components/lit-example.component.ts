import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  bold,
  card,
  cardContents,
  firstCol,
  rating,
} from "../styles/index.css";

/**
 * This is a Lit Web Component
 */
@customElement("lit-example")
class LitExample extends LitElement {
  @property()
  img: string = "";
  @property()
  title: string = "";
  @property()
  region: string = "";
  @property()
  dates: string = "";
  @property()
  price: string = "";
  @property()
  rating: string = "";

  // this prevents rendering to shadow root, breaking encapsulation
  createRenderRoot() {
    return this;
}

  /** Linking to external stylesheets is NOT recommended */
  render() {
    return html`
      <div class=${card}>
        <img src=${this.img} />
        <div class=${cardContents}>
          <div class=${bold}>
            <div name="title">${this.title}</div>
          </div>

          <div name="region" class=${firstCol}>${this.region}</div>

          <div name="dates" class=${firstCol}>${this.dates}</div>

          <div name="price" class=${firstCol}>${this.price}</div>

            <div name="rating" class=${rating}>${this.rating}</div>
          </span>
        </div>
      </div>
    `;
  }
}
