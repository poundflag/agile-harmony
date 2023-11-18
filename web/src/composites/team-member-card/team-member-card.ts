import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('team-member-card')
export class TeamMemberCard extends LitElement {
  static styles = css`
    .main-container {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      width: fit-content;
      height: fit-content;
      padding: 1rem;
      gap: 1rem;
    }

    h3,
    h5 {
      margin: 0;
    }

    .top-container {
      display: flex;
      gap: 0.5rem;
    }

    .profile-picture {
      width: 100px;
      height: 100px;
      border: 1px solid black;
    }

    .profile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .name-container {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-top: auto;
      margin-bottom: auto;
    }
  `;

  render() {
    return html`
      <div class="main-container">
        <div class="top-container">
          <div class="profile-container">
            <img src="./../../src/assets/face.svg" class="profile-picture" />
            <div class="name-container">
              <h3>Ronald</h3>
              <h3>McDonald</h3>
            </div>
          </div>
          <h5>Product-Owner</h5>
        </div>
        <div>
          <info-button>Developer</info-button><info-button>Angular</info-button
          ><info-button>Spring Boot</info-button
          ><info-button>Back-End</info-button>
        </div>
      </div>
    `;
  }
}
