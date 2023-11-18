import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Release } from '../../models/release';
import { repeat } from 'lit/directives/repeat.js';
import { Sprint } from '../../models/sprint';
import { globalStyle } from '../../styles';

@customElement('release-summary')
export class ReleaseSummary extends LitElement {
  static styles = [
    globalStyle,
    css`
      .main-container {
        border-radius: 2rem;
        padding: 0.5rem 2rem;
        width: 210px;
        height: 230px;
        position: relative;
        background-color: var(--surface-dim);
        color: var(--on-surface);
        box-shadow: 0px 1px 3px 1px #000000;
      }

      .top-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
      }

      .bottom-container {
        height: fit-content;
        width: fit-content;
        margin: auto;
      }

      .sprint-selection {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .release-info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .date {
        font-size: 0.75rem;
        font-weight: 700;
        color: #383838;
      }

      .horizontal-space {
        position: absolute;
        width: 90%;
        border: none;
        height: 1px;
        background-color: rgb(0, 0, 0);
        transform: translateY(-50%);
        left: 5%;
      }

      .button-green {
        --harmony-button-border: #31cb00;
        --harmony-button-border-radius: 0.5rem;
      }

      .button-orange {
        --harmony-button-border: #e07503;
        --harmony-button-border-radius: 0.5rem;
      }

      .button-gray {
        --harmony-button-border: #ddd5d0;
        --harmony-button-border-radius: 2rem;
      }

      .info-button-green {
        --info-button-border: #31cb00;
        --info-button-text: white;
        --info-button-border-radius: 0;
      }

      .info-button-orange {
        --info-button-border: #e07503;
        --info-button-text: white;
        --info-button-border-radius: 2rem;
      }

      .info-button-gray {
        --info-button-border: #ddd5d0;
        --info-button-text: #2d2d2d;
        --info-button-border-radius: 0;
      }
    `,
  ];

  @property()
  release!: Release;

  render() {
    return html`
      <div class="main-container">
        <div class="top-container">
          <h1>${this.release.name}</h1>
          <div class="release-info">
            <p class="date">Start: ${this.release.startDate}</p>
            <info-button rounded="true" class="info-button-orange"
              >${this.release.status}</info-button
            >
            <p class="date">End: ${this.release.endDate}</p>
          </div>
        </div>
        <hr class="horizontal-space" />
        <br />
        <div class="bottom-container">
          <div class="sprint-selection">
            ${repeat(
              this.getSprintSelection(),
              (sprint: Sprint) => sprint.id,
              (sprint: Sprint) =>
                html`<harmony-button class="sprint-element button-green"
                  >${sprint.name}</harmony-button
                >`,
            )}
          </div>
          <harmony-button>More</harmony-button>
        </div>
      </div>
    `;
  }

  private getSprintSelection(): Sprint[] {
    return this.release.sprints.slice(0, 4);
  }
}
