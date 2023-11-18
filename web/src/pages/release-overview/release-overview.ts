import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Release } from '../../models/release';
import {
  ReleaseService,
  releaseServiceContext,
} from '../../services/release-service';
import { consume } from '@lit/context';
import { map } from 'lit/directives/map.js';

@customElement('release-overview')
export class ReleaseOverview extends LitElement {
  static styles = css`
    .release-selection {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }
  `;

  @state()
  releases: Release[] = [];

  @consume({ context: releaseServiceContext })
  private _releaseService!: ReleaseService;

  connectedCallback(): void {
    super.connectedCallback();
    this._releaseService
      .getAllReleases()
      .then((releases) => (this.releases = releases));
  }

  render() {
    return html`
      <div class="release-selection">
        ${map(
          this.releases,
          (release) =>
            html`<release-summary .release="${release}"></release-summary>`,
        )}
      </div>
    `;
  }
}
