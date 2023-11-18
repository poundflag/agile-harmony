import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  ReleaseService,
  releaseServiceContext,
} from './services/release-service';
import { provide } from '@lit/context';

@customElement('app-root')
export class AppRoot extends LitElement {
  @provide({ context: releaseServiceContext })
  releaseService: ReleaseService = new ReleaseService();

  render() {
    return html` <release-overview></release-overview> `;
  }
}
