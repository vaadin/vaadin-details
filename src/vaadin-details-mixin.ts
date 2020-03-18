import { LitElement, html, property, PropertyValues } from 'lit-element';
import { Constructor } from '@vaadin/mixin-utils';
import { ControlStateMixin, ControlStateInterface } from '@vaadin/control-state-mixin/control-state-mixin.js';
import { DisabledStateMixin, DisabledStateInterface } from '@vaadin/disabled-state-mixin/disabled-state-mixin.js';
import { FocusVisibleMixin, FocusVisibleInterface } from '@vaadin/focus-visible-mixin/focus-visible-mixin.js';
import { DetailsMixinClass } from './vaadin-details-mixin-class';

export interface DetailsInterface {
  opened: boolean;
}

export type Details = DetailsInterface &
  ControlStateInterface &
  DisabledStateInterface &
  FocusVisibleInterface &
  DetailsMixinClass;

export const DetailsMixin = <T extends Constructor<LitElement>>(base: T): T & Constructor<Details> => {
  class Details extends ControlStateMixin(FocusVisibleMixin(DisabledStateMixin(base))) {
    /**
     * Used for mixin detection because `instanceof` does not work with mixins.
     */
    static hasDetailsMixin = true;

    /**
     * When true, the panel content is expanded and visible
     */
    @property({ type: Boolean, reflect: true }) opened = false;

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
      this._toggleOpened();
    }

    private _onToggleKeyDown(e: KeyboardEvent) {
      if ([13, 32].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        this._toggleOpened();
      }
    }

    private _toggleOpened() {
      this.opened = !this.opened;
    }

    protected get focusElement() {
      return this.renderRoot.querySelector('[part="summary"]');
    }
  }

  return Details;
};
