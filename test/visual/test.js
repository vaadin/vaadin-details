describe('vaadin-details', () => {
  const locator = '#details-tests';

  ['lumo', 'material'].forEach(theme => {
    it(`${theme}-default`, function() {
      return this.browser
        .url(`details.html?theme=${theme}`)
        .waitForVisible(locator, 3000)
        .waitUntil(async () => {
          const ready = await this.browser.getAttribute(locator, 'data-ready');
          return ready === 'true';
        }, 12000)
        .assertView(`${theme}-default`, locator);
    });

    it(`${theme}-rtl`, function() {
      return this.browser
        .url(`details-rtl.html?theme=${theme}`)
        .waitForVisible(locator, 3000)
        .waitUntil(async () => {
          const ready = await this.browser.getAttribute(locator, 'data-ready');
          return ready === 'true';
        }, 12000)
        .assertView(`${theme}-rtl`, locator);
    });
  });

  ['filled', 'reverse', 'small'].forEach(variant => {
    it(`lumo-${variant}`, function() {
      return this.browser
        .url(`lumo-${variant}.html`)
        .waitForVisible(locator, 3000)
        .waitUntil(async () => {
          const ready = await this.browser.getAttribute(locator, 'data-ready');
          return ready === 'true';
        }, 12000)
        .assertView(`lumo-${variant}`, locator);
    });
  });
});
