import { css } from 'lit-element';

export const detailsStyles = css`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='content'] {
    display: none;
  }

  :host([opened]) [part='content'] {
    display: block;
  }

  :host([disabled]) [part='summary'] {
    pointer-events: none;
  }
`;
