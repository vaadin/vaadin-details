const { createKarmaConfig, merge } = require('@vaadin/vaadin-component-dev-dependencies/karma-config.js');

module.exports = config => {
  config.set(
    merge(createKarmaConfig(), {
      coverageIstanbulReporter: {
        thresholds: {
          global: {
            statements: 90,
            lines: 90,
            branches: 85,
            functions: 90
          }
        }
      }
    })
  );

  return config;
};
