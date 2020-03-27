describe('vaadin-details', () => {
  const locator = '#details-tests[data-ready]';

  ['lumo', 'material'].forEach(theme => {
    it(`${theme}-default`, function() {
      return this.browser
        .url(`details.html?theme=${theme}`)
        .waitForVisible(locator, 10000)
        .assertView(`${theme}-default`, locator);
    });

    it(`${theme}-rtl`, function() {
      return this.browser
        .url(`details.html?theme=${theme}&dir=rtl`)
        .waitForVisible(locator, 10000)
        .assertView(`${theme}-rtl`, locator);
    });
  });

  ['filled', 'reverse', 'small'].forEach(variant => {
    it(`lumo-${variant}`, function() {
      return this.browser
        .url(`lumo-${variant}.html`)
        .waitForVisible(locator, 10000)
        .assertView(`lumo-${variant}`, locator);
    });

    it(`lumo-${variant}-rtl`, function() {
      return this.browser
        .url(`lumo-${variant}.html?dir=rtl`)
        .waitForVisible(locator, 10000)
        .assertView(`lumo-${variant}-rtl`, locator);
    });
  });
});
