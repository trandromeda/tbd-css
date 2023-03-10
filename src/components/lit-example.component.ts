import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * This is a Lit Web Component
 */
@customElement('lit-example')
class LitExample extends LitElement {
  render() {
    return html`
      <div>I was created with Lit!</div>
    `;
  }
}