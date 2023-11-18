import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('harmony-button')
export class Button extends LitElement {
  static styles = css`
    :host(.button-green) {
      --harmony-button-border: #31cb00;
      --harmony-button-border-radius: 0.5rem;
    }

    :host(.button-orange) {
      --harmony-button-border: #e07503;
      --harmony-button-border-radius: 0.5rem;
    }

    :host(.button-gray) {
      --harmony-button-border: #ddd5d0;
      --harmony-button-border-radius: 2rem;
    }

    .main-container {
      border: 2px solid var(--harmony-button-border);
      border-radius: var(--harmony-button-border-radius);
      padding: 0.5rem 1rem;
      font-weight: 700;
      width: fit-content;
      height: fit-content;
      box-shadow: 0px 1px 2px 0px #000000;
    }

    .rounded {
      border-radius: 2rem;
    }
  `;

  @property()
  rounded!: boolean;

  render() {
    return html`
      <div class="main-container ${classMap({ rounded: this.rounded })}">
        <slot></slot>
      </div>
    `;
  }
}
