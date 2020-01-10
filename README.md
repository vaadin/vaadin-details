# &lt;vaadin-details&gt;

[&lt;vaadin-details&gt;](https://vaadin.com/components/vaadin-details) is a Web Component providing functionality for expandable details, part of the [Vaadin components](https://vaadin.com/components).

[Live Demo ↗](https://vaadin.com/components/vaadin-details/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-details/html-api)

[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-details)](https://www.npmjs.com/package/@vaadin/vaadin-details)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vaadin/vaadin-details)
[![Build Status](https://travis-ci.org/vaadin/vaadin-details.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-details)
[![Coverage Status](https://coveralls.io/repos/github/vaadin/vaadin-details/badge.svg?branch=master)](https://coveralls.io/github/vaadin/vaadin-details?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-details)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/vaadin-details-directory-urlidentifier.svg)](https://vaadin.com/directory/component/vaadinvaadin-details)

> ⚠️ This is a pre-release version built with [`LitElement`](https://github.com/Polymer/lit-element), part of the [next generation of Vaadin web components](https://vaadin.com/blog/next-generation-vaadin-components).
>
> Looking for Vaadin 14 compatible version? Please see the following branches:
> - [1.0 branch](https://github.com/vaadin/vaadin-details/tree/1.0)
> - [1.1 branch](https://github.com/vaadin/vaadin-details/tree/1.1)

```html
<vaadin-details opened>
  <div slot="summary">Expandable Details</div>
  Toggle using mouse, Enter and Space keys.
</vaadin-details>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-details/master/screenshot.png" alt="Screenshot of vaadin-details" width="320">](https://vaadin.com/components/vaadin-details)


## Installation

Install `vaadin-details`:

```sh
npm i @vaadin/vaadin-details --save
```

Once installed, import it in your application:

```js
import '@vaadin/vaadin-details/vaadin-details.js';
```

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The component with the Lumo theme:

  `theme/lumo/vaadin-details.js`

- The component with the Material theme:

  `theme/material/vaadin-details.js`

- Alias for `theme/lumo/vaadin-details.js`:

  `vaadin-details.js`


## Running demos and API docs in a browser

1. Fork the `vaadin-details` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vaadin-details` directory, run `npm install` to install dependencies.

1. Run `npm start`, browser will automatically open the component API documentation.

## Running tests from the command line

- When in the `vaadin-details` directory, run `npm test`

- To debug tests in the browser, run `npm run test:debug`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting TypeScript code. You can check if your code is
following our standards by running `npm run lint`, which will automatically lint all `.ts` files.


## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).


## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
