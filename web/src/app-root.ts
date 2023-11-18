import { LitElement, PropertyValueMap, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  ReleaseService,
  releaseServiceContext,
} from './services/release-service';
import { provide } from '@lit/context';
import { globalStyle } from './styles';
import { Router } from '@vaadin/router';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = [
    globalStyle,
    css`
      main {
        margin: 0 2rem;
      }
    `,
  ];

  @provide({ context: releaseServiceContext })
  releaseService: ReleaseService = new ReleaseService();

  firstUpdated(_changedProperties: PropertyValueMap<this>) {
    super.firstUpdated(_changedProperties);
    const router = new Router(this.shadowRoot?.querySelector('#router-outlet'));
    router.setRoutes([
      { path: '/', component: 'release-overview' },
      { path: '/sprint/:sprintId/team', component: 'team-overview' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  render() {
    return html`
      <harmony-topbar></harmony-topbar>
      <main>
        <div id="router-outlet"></div>
      </main>
    `;
  }
}
