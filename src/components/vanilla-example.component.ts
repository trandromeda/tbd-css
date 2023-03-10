type Property = 'message' | 'name';

/**
 * This is a 'from-scratch' Web Component
 */
export default class VanillaExample extends HTMLElement {
    public message?: string;
    public name?: string;

    static get observedAttributes() {
        return ['message']
    }

    constructor() {
        super();
        this.message = 'I was built from scratch!';
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: 'closed'});
        const template = (document.getElementById('hello-world') as HTMLTemplateElement).content.cloneNode(true) as HTMLTemplateElement

        const msg = `Hi, ${this.message}`
        Array.from(template.querySelectorAll('slot.hw-text')).forEach(n => n.textContent = msg)

       shadow.append(template)
    }

    attributeChangedCallback(property: Property, oldValue: string, newValue: string) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }
}

customElements.define('hello-world', VanillaExample)