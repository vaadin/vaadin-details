import { css } from 'lit-element';
import { ControlStateMixin, ControlStateInterface } from '@vaadin/control-state-mixin/control-state-mixin.js';
import { DisabledStateMixin, DisabledStateInterface } from '@vaadin/disabled-state-mixin/disabled-state-mixin.js';
import { FocusVisibleMixin, FocusVisibleInterface } from '@vaadin/focus-visible-mixin/focus-visible-mixin.js';
import { DetailsBase } from './vaadin-details-base';

type VaadinDetailsBase = new () => DetailsBase;

type DetailsControlState = new () => DetailsBase &
  ControlStateInterface &
  DisabledStateInterface &
  FocusVisibleInterface;

export const DetailsStateMixin = <T extends VaadinDetailsBase>(base: T): DetailsControlState => {
  const Base = ControlStateMixin(FocusVisibleMixin(DisabledStateMixin(base as VaadinDetailsBase)));

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
