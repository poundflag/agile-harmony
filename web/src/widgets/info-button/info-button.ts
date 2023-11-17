import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('info-button')
export class InfoButton extends LitElement {
  static styles = css`

    :host(.info-button-green) {
      --info-button-border: #31CB00;
      --info-button-text: white;
      --info-button-border-radius: 0;
    }

    :host(.info-button-orange) {
      --info-button-border: #E07503;
      --info-button-text: white;
      --info-button-border-radius: 2rem;
    }

    :host(.info-button-gray) {
      --info-button-border: #DDD5D0;
      --info-button-text: #2D2D2D;
      --info-button-border-radius: 0;
    }

    .main-container {
      background-color: var(--info-button-border);
      color: var(--info-button-text);
      border-radius: var(--info-button-border-radius);
      padding: 0.5rem 1rem;
      font-weight: 700;
      width: fit-content;
      height: fit-content;type Color = 'red' | 'green' | 'blue';
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
