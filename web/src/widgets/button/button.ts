import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalStyle } from '../../styles';

@customElement('harmony-button')
export class Button extends LitElement {
  static styles = [
    globalStyle,
    css`
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
    `,
  ];

  render() {
    return html`
      <div class="main-container ambient-shadow">
        <slot></slot>
      </div>
    `;
  }
}
