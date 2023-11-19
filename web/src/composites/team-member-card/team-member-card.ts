import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalStyle } from '../../styles';

@customElement('team-member-card')
export class TeamMemberCard extends LitElement {
  static styles = [
    globalStyle,
    css`
      .main-container {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        background-color: var(--surface-dim);
        width: fit-content;
        min-width: 200px;
        max-width: 300px;
        height: fit-content;
        padding: 1rem;
        gap: 0.5rem;
        border-radius: 2rem;
      }

      h3,
      h5 {
        margin: 0;
      }

      .profile-picture {
        width: 100px;
        height: 100px;
      }

      .name-container {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-top: auto;
        margin-bottom: auto;
      }

      .role-name {
        text-align: center;
      }

      .chip-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .chip-tags > info-button {
        --info-button-min-width: 2rem;
        --info-button-max-width: 8rem;
        --info-button-height: 1rem;
        --info-button-font-size: 0.75rem;
        --info-button-border-radius: 2rem;
        --info-button-background-color: var(--surface);
      }
    `,
  ];

  render() {
    return html`
      <div class="main-container elevation-2">
        <img src="./../../src/assets/face.svg" class="profile-picture" />
        <div class="name-container">
          <h3>Ronald</h3>
          <h3>McDonald</h3>
        </div>
        <h5 class="role-name">Product-Owner</h5>
        <div class="chip-tags">
          <info-button>Developer</info-button>
          <info-button>Angular</info-button>
          <info-button>Spring Boot</info-button>
          <info-button>Back-End</info-button>
        </div>
      </div>
    `;
  }
}
