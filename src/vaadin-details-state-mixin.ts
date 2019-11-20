import { css } from 'lit-element';
import { ControlStateMixin, ControlStateInterface } from '@vaadin/control-state-mixin/control-state-mixin.js';
import { DetailsBase } from './vaadin-details-base';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = object, A extends any[] = any[]> = new (...a: A) => T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DetailsControlState = new (...args: any[]) => DetailsBase & ControlStateInterface;

export const DetailsStateMixin = <T extends Constructor<DetailsBase>>(base: T): DetailsControlState => {
  const Base = ControlStateMixin(base as Constructor<DetailsBase>);

  class VaadinDetailsStateMixin extends Base {
    static get styles() {
      return [
        DetailsBase.styles,
        css`
          :host([disabled]) [part='summary'] {
            pointer-events: none;
          }
        `
      ];
    }

    protected get focusElement() {
      return this.renderRoot.querySelector('[part="summary"]');
    }

    protected _onToggleClick() {
      if (this.disabled) {
        return;
      }
      super._onToggleClick();
    }
  }

  return VaadinDetailsStateMixin;
};
