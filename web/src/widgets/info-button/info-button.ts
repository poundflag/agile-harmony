import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('info-button')
export class InfoButton extends LitElement {
  static styles = css`
    :host {
      --info-button-background-color: inherit;
    }

    .main-container {
      background-color: var(--info-button-background-color);
      color: var(--info-button-text);
      border-radius: var(--info-button-border-radius);
      padding: 0.5rem 1rem;
      font-weight: 700;
      width: fit-content;
      height: fit-content;
      box-shadow: 0px 0.5px 4px 0px #000000;
    }
  `;

  render() {
    return html`
      <div class="main-container">
        <slot></slot>
      </div>
    `;
  }
}
