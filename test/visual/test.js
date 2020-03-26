describe('vaadin-details', () => {
  const locator = '#details-tests';

  const elementsReady = browser => async () => {
    const ready = await browser.getAttribute(locator, 'data-ready');
    return ready === 'true';
  };

  ['lumo', 'material'].forEach(theme => {
    it(`${theme}-default`, function() {
      return this.browser
        .url(`details.html?theme=${theme}`)
        .waitForVisible(locator, 3000)
        .waitUntil(elementsReady(this.browser), 7000)
        .assertView(`${theme}-default`, locator);
    });

    it(`${theme}-rtl`, function() {
      return this.browser
        .url(`details-rtl.html?theme=${theme}`)
        .waitForVisible(locator, 3000)
        .waitUntil(elementsReady(this.browser), 7000)
        .assertView(`${theme}-rtl`, locator);
    });
  });

  ['filled', 'reverse', 'small'].forEach(variant => {
    it(`lumo-${variant}`, function() {
      return this.browser
        .url(`lumo-${variant}.html`)
        .waitForVisible(locator, 3000)
        .waitUntil(elementsReady(this.browser), 7000)
        .assertView(`lumo-${variant}`, locator);
    });
  });
});
