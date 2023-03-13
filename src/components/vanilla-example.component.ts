type Property = "message" | "name";

/**
 * This is a 'from-scratch' Web Component
 */
export default class VanillaExample extends HTMLElement {
  public message?: string;
  public name?: string;

  static get observedAttributes() {
    return ["message"];
  }

  constructor() {
    super();
    this.message = "I was built from scratch!";
  }

  connectedCallback() {
    console.log('className: ', this.className);
    const shadow = this.attachShadow({ mode: "open" });
    const template = (
      document.getElementById("vanilla") as HTMLTemplateElement
    ).content.cloneNode(true) as HTMLTemplateElement;

    shadow.append(template);
  }

  attributeChangedCallback(
    property: Property,
    oldValue: string,
    newValue: string
  ) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
}

customElements.define("vanilla-example", VanillaExample);
