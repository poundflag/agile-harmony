import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Release } from '../../models/release';
import { Sprint } from '../../models/sprint';
import { globalStyle } from '../../styles';
import { releaseSummaryStyle } from './release-summary-style';

@customElement('release-summary')
export class ReleaseSummary extends LitElement {
  static styles = [globalStyle, releaseSummaryStyle];

  @property()
  release!: Release;

  render() {
    return html`
      <div class="main-container">
        <div class="top-container">
          <h1>${this.release.name}</h1>
          <div class="release-info">
            <p class="date">Start: ${this.release.startDate}</p>
            <info-button rounded="true" class="${this._getReleaseStatusColor()}"
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
              this.release.sprints,
              (sprint: Sprint) => sprint.id,
              (sprint: Sprint) =>
                html`<harmony-button
                  class="sprint-element ${this._getSprintStatusColor(
                    sprint.status,
                  )}"
                  >${sprint.name}</harmony-button
                >`,
            )}
            <harmony-button class="sprint-element add-button"
              >Add</harmony-button
            >
          </div>
        </div>
      </div>
    `;
  }

  private _getReleaseStatusColor() {
    switch (this.release.status) {
      case 'Open':
        return 'info-button-open';
      case 'Running':
        return 'info-button-running';
      case 'Finished':
        return 'info-button-finished';
      default:
        return '';
    }
  }

  private _getSprintStatusColor(status: string) {
    switch (status) {
      case 'Open':
        return 'sprint-button-open';
      case 'Running':
        return 'sprint-button-running';
      case 'Finished':
        return 'sprint-button-finished';
      default:
        return '';
    }
  }
}
