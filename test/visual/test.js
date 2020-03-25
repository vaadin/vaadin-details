describe('vaadin-details', () => {
  ['lumo', 'material'].forEach(theme => {
    it(`${theme}-default`, function() {
      return this.browser
        .url(`details.html?theme=${theme}`)
        .waitForVisible('#details-tests', 3000)
        .waitUntil(async () => {
          const ready = await this.browser.getAttribute('#details-tests', 'data-ready');
          return ready === 'true';
        }, 4000)
        .assertView(`${theme}-default`, '#details-tests');
    });

    it(`${theme}-rtl`, function() {
      return this.browser
        .url(`details-rtl.html?theme=${theme}`)
        .waitForVisible('#details-tests', 3000)
        .waitUntil(async () => {
          const ready = await this.browser.getAttribute('#details-tests', 'data-ready');
          return ready === 'true';
        }, 4000)
        .assertView(`${theme}-rtl`, '#details-tests');
    });
  });

  ['filled', 'reverse', 'small'].forEach(variant => {
    it(`lumo-${variant}`, function() {
      return this.browser
        .url(`lumo-${variant}.html`)
        .waitForVisible('#details-tests', 3000)
        .waitUntil(async () => {
          const ready = await this.browser.getAttribute('#details-tests', 'data-ready');
          return ready === 'true';
        }, 4000)
        .assertView(`lumo-${variant}`, '#details-tests');
    });
  });
});
