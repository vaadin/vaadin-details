import { html, css, customElement, property, PropertyValues } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import { ControlStateMixin } from '@vaadin/control-state-mixin/control-state-mixin.js';

/**
 * `<vaadin-details>` is a Web Component creating an expandable panel
 * similar to `<details>` HTML element.
 *
 * @element vaadin-details
 *
 * @slot - Slot fot the collapsible details content.
 * @slot summary - Slot for the summary content.
 *
 * @attr {Boolean} focused - Set when the element is focused.
 * @attr {Boolean} focus-ring - Set when the element is focused using the keyboard.
 *
 * @fires opened-changed - Fired when the `opened` property changes.
 */
@customElement('vaadin-details')
export class VaadinDetails extends ControlStateMixin(VaadinElement) {
  static is = 'vaadin-details';

  static get version() {
    return '1.0.1';
  }

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
        overflow: hidden;
      }

      :host([disabled]) [part='summary'] {
        pointer-events: none;
      }

      :host([opened]) [part='content'] {
        display: block;
        overflow: visible;
      }
    `;
  }

  protected render() {
    return html`
      <div role="heading">
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
      </div>
      <div
        part="content"
        style="${styleMap({ maxHeight: this.opened ? '' : '0px' })}"
        aria-hidden="${this.opened ? 'false' : 'true'}"
        @keydown="${this._onContentKeyDown}"
      >
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

declare global {
  interface HTMLElementTagNameMap {
    'vaadin-details': VaadinDetails;
  }
}
