import {
  AfterEnterObserver,
  EmptyCommands,
  Router,
  RouterLocation,
} from '@vaadin/router';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('team-overview')
export class TeamOverview extends LitElement implements AfterEnterObserver {
  onAfterEnter(
    location: RouterLocation,
    commands: EmptyCommands,
    router: Router,
  ): void {
    console.log(location.params?.sprintId);
  }

  render() {
    return html`<team-member-card></team-member-card>`;
  }
}
