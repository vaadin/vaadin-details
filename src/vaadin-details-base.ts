import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import { detailsStyles } from './vaadin-details-css';

export class DetailsBase extends VaadinElement {
  static get styles() {
    return detailsStyles;
  }
}
