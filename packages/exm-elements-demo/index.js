var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement } from 'lit-element';
import '@polymer/app-layout/app-header';
import '@polymer/app-layout/app-toolbar';
let ExmElementsDemo = class ExmElementsDemo extends LitElement {
    render() {
        return html `
      <app-header>
        <app-toolbar>
          HELLO
        </app-toolbar>
      </app-header>
    `;
    }
};
ExmElementsDemo = __decorate([
    customElement('exm-elements-demo')
], ExmElementsDemo);
export { ExmElementsDemo };
