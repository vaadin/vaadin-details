import { fixture, html } from '@open-wc/testing-helpers';
import { keyDownOn } from '@polymer/iron-test-helpers/mock-interactions.js';
import { VaadinDetails } from '../../src/vaadin-details'; // eslint-disable-line import/extensions

const { expect } = chai;
const { sinon } = window;

describe('details', () => {
  let details: VaadinDetails;
  let toggle: HTMLDivElement;
  let content: HTMLDivElement;

  beforeEach(async () => {
    details = (await fixture(html`
      <vaadin-details>
        <div slot="summary">Summary</div>
        <input />
      </vaadin-details>
    `)) as VaadinDetails;
    toggle = details.renderRoot.querySelector('[part="summary"]') as HTMLDivElement;
    content = details.renderRoot.querySelector('[part="content"]') as HTMLDivElement;
  });

  describe('custom element definition', () => {
    let tagName: string;

    beforeEach(() => {
      tagName = details.tagName.toLowerCase();
    });

    it('should be defined in custom element registry', () => {
      expect(customElements.get(tagName)).to.be.ok;
      expect(details instanceof VaadinDetails).to.be.ok;
    });

    it('should have a valid static "is" getter', () => {
      expect(customElements.get(tagName).is).to.equal(tagName);
    });

    it('should have a valid version number', () => {
      expect(customElements.get(tagName).version).to.match(/^(\d+\.)?(\d+\.)?(\d+)(-(alpha|beta)\d+)?$/);
    });
  });

  describe('DOM elements', () => {
    it('should set role="button" on the toggle button', () => {
      expect(toggle.getAttribute('role')).to.equal('button');
    });

    it('should set role="heading" on the toggle button wrapper', () => {
      expect(toggle.parentElement!.getAttribute('role')).to.equal('heading');
    });

    it('should have `summary` slot inside toggle button', () => {
      const slot = toggle.querySelector('slot[name="summary"]') as HTMLSlotElement;
      expect(slot).to.be.ok;
      expect(slot.assignedNodes()[0].textContent).to.equal('Summary');
    });
  });

  describe('opened', () => {
    it('should update `opened` on toggle button click', () => {
      toggle.click();
      expect(details.opened).to.equal(true);
      toggle.click();
      expect(details.opened).to.equal(false);
    });

    it('should update `opened` on toggle button enter', () => {
      keyDownOn(toggle, 13, [], 'Enter');
      expect(details.opened).to.equal(true);
      keyDownOn(toggle, 13, [], 'Enter');
      expect(details.opened).to.equal(false);
    });

    it('should update `opened` on toggle button space', () => {
      keyDownOn(toggle, 32, [], ' ');
      expect(details.opened).to.equal(true);
      keyDownOn(toggle, 32, [], ' ');
      expect(details.opened).to.equal(false);
    });

    it('should hide the content when `opened` is false', () => {
      const style = getComputedStyle(content);
      expect(style.display).to.equal('none');
      expect(style.overflow).to.equal('hidden');
      expect(style.maxHeight).to.equal('0px');
    });

    it('should show the content when `opened` is true', async () => {
      details.opened = true;
      await details.updateComplete;
      const style = getComputedStyle(content);
      expect(style.display).to.equal('block');
      expect(style.overflow).to.equal('visible');
      expect(style.maxHeight).to.equal('none');
    });

    it('should dispatch `opened-changed` event when `opened` changes', async () => {
      const spy = sinon.spy();
      details.addEventListener('opened-changed', spy);
      toggle.click();
      await details.updateComplete;
      expect(spy).to.be.calledOnce;
      expect(spy.firstCall.args[0].detail).to.be.an('object');
      expect(spy.firstCall.args[0].detail.value).to.equal(true);
    });

    it('should update aria-expanded on toggle button when `opened` changes', async () => {
      expect(toggle.getAttribute('aria-expanded')).to.equal('false');
      details.opened = true;
      await details.updateComplete;
      expect(toggle.getAttribute('aria-expanded')).to.equal('true');
    });

    it('should update aria-hidden on the content when `opened` changes', async () => {
      expect(content.getAttribute('aria-hidden')).to.equal('true');
      details.opened = true;
      await details.updateComplete;
      expect(content.getAttribute('aria-hidden')).to.equal('false');
    });
  });

  describe('focus', () => {
    it('should stop Shift + Tab on the content from propagating to the host', () => {
      const input = details.querySelector('input') as HTMLInputElement;
      const spy = sinon.spy();
      details.addEventListener('keydown', spy);
      keyDownOn(input, 9, 'shift', 'Tab');
      expect(spy).to.not.be.called;
    });
  });
});
