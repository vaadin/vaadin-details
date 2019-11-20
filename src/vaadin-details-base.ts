import { html, css, property, PropertyValues } from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import { ControlStateMixin } from '@vaadin/control-state-mixin/control-state-mixin.js';

export class DetailsBase extends ControlStateMixin(VaadinElement) {
  /**
   * When true, the panel content is expanded and visible
   */
  @property({ type: Boolean, reflect: true }) opened = false;

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part='content'] {
        display: none;
      }

      :host([disabled]) [part='summary'] {
        pointer-events: none;
      }

      :host([opened]) [part='content'] {
        display: block;
      }
    `;
  }

  protected render() {
    return html`
      <div
        role="button"
        part="summary"
        @click="${this._onToggleClick}"
        @keydown="${this._onToggleKeyDown}"
        aria-expanded="${this.opened ? 'true' : 'false'}"
      >
        <span part="toggle"></span>
        <span part="summary-content"><slot name="summary"></slot></span>
      </div>
      <div part="content" aria-hidden="${this.opened ? 'false' : 'true'}" @keydown="${this._onContentKeyDown}">
        <slot></slot>
      </div>
    `;
  }

  protected get focusElement() {
    return this.renderRoot.querySelector('[part="summary"]');
  }

  protected updated(props: PropertyValues) {
    super.updated(props);

    if (props.has('opened')) {
      this.dispatchEvent(
        new CustomEvent('opened-changed', {
          detail: { value: this.opened }
        })
      );
    }
  }

  private _onContentKeyDown(e: KeyboardEvent) {
    if (e.shiftKey && e.keyCode === 9) {
      e.stopPropagation();
    }
  }

  private _onToggleClick() {
    if (this.disabled) {
      return;
    }
    this.opened = !this.opened;
  }

  private _onToggleKeyDown(e: KeyboardEvent) {
    if ([13, 32].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      this.opened = !this.opened;
    }
  }
}
