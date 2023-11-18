import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Release } from '../../models/release';
import {
  ReleaseService,
  releaseServiceContext,
} from '../../services/release-service';
import { consume } from '@lit/context';
import { map } from 'lit/directives/map.js';
import {
  AfterEnterObserver,
  EmptyCommands,
  Router,
  RouterLocation,
} from '@vaadin/router';

@customElement('release-overview')
export class ReleaseOverview extends LitElement implements AfterEnterObserver {
  static styles = css`
    .release-selection {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }
  `;

  @state()
  private _releases: Release[] = [];

  @consume({ context: releaseServiceContext })
  private _releaseService!: ReleaseService;

  private _router!: Router;

  connectedCallback(): void {
    super.connectedCallback();
    this._releaseService
      .getAllReleases()
      .then((releases) => (this._releases = releases));
  }

  onAfterEnter(
    location: RouterLocation,
    commands: EmptyCommands,
    router: Router,
  ): void {
    this._router = router;
  }

  render() {
    return html`
      <div class="release-selection">
        ${map(
          this._releases,
          (release) =>
            html`<release-summary
              .release="${release}"
              @sprint-select="${this._onSprintSelect}"
            ></release-summary>`,
        )}
      </div>
    `;
  }

  private _onSprintSelect($event: CustomEvent) {
    this._router.render('/sprint/' + $event.detail + '/team', true);
  }
}
