import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Release } from '../../models/release';

@customElement('release-overview')
export class ReleaseOverview extends LitElement {
  releaseExample!: Release;

  connectedCallback(): void {
    super.connectedCallback();
    this.releaseExample = {
      releaseName: 'v 1.0',
      startDate: '01-10-2023',
      endDate: '10-10-2023',
      status: 'Running',
      sprints: [
        { name: 'Sprint 1', status: 'Finished', id: '1' },
        { name: 'Sprint 2', status: 'Finished', id: '2' },
        { name: 'Sprint 2', status: 'Finished', id: '1' },
        { name: 'Sprint 4', status: 'Finished', id: '2' },
      ],
    };
  }

  render() {
    return html`
      <release-summary .release="${this.releaseExample}"></release-summary>
    `;
  }
}
