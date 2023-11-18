import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('harmony-button')
export class Button extends LitElement {
  static styles = css`
    :host() {
      --harmony-button-border-radius: 0.5rem;
      --harmony-button-height: fit-content;
      --harmony-button-width: fit-content;
      --harmony-button-color: inherit;
      --harmony-button-background-color: inherit;
      --harmony-button-hover-background-color: inherit;
      --harmony-button-active-background-color: inherit;
    }

    .main-container {
      border-radius: var(--harmony-button-border-radius);
      background-color: var(--harmony-button-background-color);
      color: var(--harmony-button-color);
      padding: 0.5rem 1rem;
      font-weight: 700;
      width: var(--harmony-button-width);
      height: var(--harmony-button-height);
      box-shadow: 0px 1px 2px 0px #000000;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-container:hover {
      cursor: pointer;
      background-color: var(--harmony-button-hover-background-color);
    }

    .main-container:active {
      cursor: pointer;
      background-color: var(--harmony-button-active-background-color);
      font-weight: 400;
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
