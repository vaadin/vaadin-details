gemini.suite('vaadin-details', rootSuite => {
  function wait(actions) {
    return actions.wait(7000);
  }

  function goToAboutBlank(actions) {
    // Firefox stops responding on socket after a test, workaround:
    return actions.executeJS(window => {
      window.location.href = 'about:blank'; // eslint-disable-line no-param-reassign
    });
  }

  rootSuite.before(wait).after(goToAboutBlank);

  ['lumo', 'material'].forEach(theme => {
    gemini.suite(`details-${theme}`, suite => {
      suite
        .setUrl(`details.html?theme=${theme}`)
        .setCaptureElements('#details-tests')
        .capture(`default`);
    });
  });

  ['filled', 'reverse', 'small'].forEach(variant => {
    gemini.suite(`lumo-${variant}`, suite => {
      suite
        .setUrl(`lumo-${variant}.html`)
        .setCaptureElements('#details-tests')
        .capture(`default`);
    });
  });
});
