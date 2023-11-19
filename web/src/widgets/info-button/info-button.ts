import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalStyle } from '../../styles';

@customElement('info-button')
export class InfoButton extends LitElement {
  static styles = [
    globalStyle,
    css`
      :host {
        --info-button-background-color: inherit;
        --info-button-width: inherit;
        --info-button-height: inherit;
        --info-button-font-size: inherit;
        --info-button-min-width: inherit;
        --info-button-max-width: inherit;
        --info-button-border-radius: inherit;
      }

      .main-container {
        background-color: var(--info-button-background-color);
        color: var(--info-button-text);
        border-radius: var(--info-button-border-radius);
        font-size: var(--info-button-font-size);
        padding: 0.5rem 1rem;
        font-weight: 700;
        width: var(--info-button-width);
        min-width: var(--info-button-min-width);
        max-width: var(--info-button-max-width);
        height: var(--info-button-height);
        overflow: hidden;
        word-wrap: break-word;
        white-space: nowrap;
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
