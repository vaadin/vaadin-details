describe('vaadin-details', () => {
  ['lumo', 'material'].forEach(theme => {
    it(`${theme}-default`, function() {
      return this.browser
        .url(`details.html?theme=${theme}`)
        .pause(10000)
        .assertView(`${theme}-default`, '#details-tests');
    });

    it(`${theme}-rtl`, function() {
      return this.browser
        .url(`details-rtl.html?theme=${theme}`)
        .pause(10000)
        .assertView(`${theme}-rtl`, '#details-tests');
    });
  });

  ['filled', 'reverse', 'small'].forEach(variant => {
    it(`lumo-${variant}`, function() {
      return this.browser
        .url(`lumo-${variant}.html`)
        .pause(10000)
        .assertView(`lumo-${variant}`, '#details-tests');
    });
  });
});
