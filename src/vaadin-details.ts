import { customElement } from 'lit-element';
import { DetailsBase } from './vaadin-details-base';
import { DetailsMixin } from './vaadin-details-mixin';

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
 * @csspart toggle - The element used as indicator, can represent an icon.
 * @csspart summary-content - The wrapper for the slotted summary content.
 * @csspart summary - The element used to open and close collapsible content.
 * @csspart content - The wrapper for the collapsible details content.
 *
 * @fires opened-changed - Fired when the `opened` property changes.
 */
@customElement('vaadin-details')
export class VaadinDetails extends DetailsMixin(DetailsBase) {
  static is = 'vaadin-details';

  static get version() {
    return '2.0.0-alpha5';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin-details': VaadinDetails;
  }
}
