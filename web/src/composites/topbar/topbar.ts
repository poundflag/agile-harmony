import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalStyle } from '../../styles';

@customElement('harmony-topbar')
export class Topbar extends LitElement {
  static styles = [
    globalStyle,
    css`
      .main-container {
        background-color: var(--surface-bright);
        padding: 1rem 2rem;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
      }

      h2 {
        margin: 0;
      }
    `,
  ];

  render() {
    return html`<div class="main-container elevation-1">
      <h2>Agile-Harmony</h2>
    </div>`;
  }
}
