import {customElement, html, LitElement } from 'lit-element';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';

@customElement('exm-elements-demo')
export class ExmElementsDemo extends LitElement {
  toggleDrawer () {
    if (!this.shadowRoot) return;
    const menu = this.shadowRoot.querySelector('app-drawer');
    if (!menu) return;
    menu.toggle();
  }

  render() {
    return html`
      <app-drawer-layout>
        <app-header-layout>
          <app-header reveals>
            <app-toolbar>
              <paper-icon-button icon="menu" @click="${this.toggleDrawer}"></paper-icon-button>
              ExMachina - Elements
            </app-toolbar>
          </app-header>
        </app-header-layout>
        <app-drawer id="menu">
          <div style="height: 100%; overflow: auto;">
            content
          </div>
        </app-drawer>
      </app-drawer-layout>
    `;
  }
}
