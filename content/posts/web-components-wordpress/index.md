---
title: 'Web components & WordPress'
date: 2020-02-29
category: 'WordPress'
description: 'Delivering interactive elements to a JavaScript application via the WordPress REST API has a host of challenges, but web components may hold the solution'
---

Last spring, I worked on a project where we supplied static content from a WordPress site to a React app via the REST API, which seems like a fairly common use case for the WP REST API. The challenge we faced in this project was that the content from the WordPress site included a carousel&mdash;an interactive component.

Creating a content block to add a carousel to a standard WordPress page is no problem. We can detect when the block is used, and enqueue the JavaScript (JS) required for the carousel's interactivity. But when that same carousel is saved to the WP REST API, only the markup for the carousel is available. Replicating the carousel's functionality in a JS application becomes more challenging.

One approach is to try loading the same script used in the original block. This _can_ work, but if you need to fire events on `load`, you quickly find yourself dealing with race conditions and non-functional components.

Another option is to expose content block data to your REST API. An issue with this approach is that that data for core blocks (e.g. `core/paragraph`), isn't always stored independently of the markup. See `innerContent` in the code below:

```json
{
  "blocks": [
    {
      "blockName": "core/paragraph",
      "attrs": [],
      "innerBlocks": [],
      "innerHTML": "\n<p>This is an example page. It's different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:</p>\n",
      "innerContent": [
        "\n<p>This is an example page. It's different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:</p>\n"
      ]
    }
  ]
}
```

Folks who've built WP content blocks know that they use React under the hood. This is great, but if your JS application is build in Angular or Vue, you'll end up building your custom content blocks twice.

[Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) offer an enticing solution to this problem. Web components allow developers to create custom elements (i.e. HTML elements), that encapsulate their own styles and JS.

In this post, I'll walk through building an interactive web component, creating a content block with the component, and finally, how to pull everything together in a simple React example that calls a WP REST API endpoint.

## Building a web component

Building a web component requires a decent amount of JS knowledge. DOM expertise is a must, comfort with [ES2015 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) is important, and you will need to know a few Array methods including [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

You won't need extensive command line experience for this tutorial, but you will need to run a few commands. With all this said, let's define what we're building.

To demonstrate how web components can handle interactivity, we're going to build an accordion component. Here are the requirements for our accordion:

- allow a user to expand & collapse panels
- have an option to determine whether one panel is open at a time, or if several can be open
- use accessible markup
- support keyboard users

### Spinning up the accordion project

We'll start the accordion component by creating a new directory and initializing a new `npm` project.

```bash
mkdir my-accordion
cd my-accordion
npm init
```

Follow the prompts on the screen to initialize your `npm` project.

![Initializing an npm project](initialize-npm-project.jpg)

Next, install Lit Element.

```bash
npm install lit-element
```

As the site states, [Lit Element](https://lit-element.polymer-project.org/) is &ldquo;a simple base class for creating fast, lightweight web components,&rdquo; that makes spinning up new web components super easy. It offers utilities for easily styling web components, creating component templates, and lifecycle hooks for updating your web component.

Before proceeding to the next step, review the [Lit Element starting guide](https://lit-element.polymer-project.org/guide/start) to setup your environment to use Lit Element locally. Most importantly, you should make sure you have the [`polymer-cli`](https://www.npmjs.com/package/polymer-cli) installed.

Now that we have Lit Element set up, let's add some new files to our project. We will need a JS file, an HTML file, and I think it's a good idea to document as we go, so let's include a markdown file for our readme. Also include a `.gitignore` file if you plan to push your project to a remote Git server. The project structure should look something like this:

```
.
├── node_modules
├── .gitignore
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

We'll start by having our web component output "Hello World." To do this, we'll need to extend the `LitElement` base class in `index.js`:

```js
// index.js
import { LitElement, html } from 'lit-element';

class AlcatrazAccordion extends LitElement {
  render() {
    return html`
      <h2>hello world!</h2>
    `;
  }
}

customElements.define('alcatraz-accordion', AlcatrazAccordion);
```

The `render` method returns our component's HTML template. The `html` function is simply a wrapper for creating the template. `customElements.define()` allows us to define a name for our web component, and associate the extended `LitElement` class to this tag.

Next, we will test that our component renders as expected in HTML.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alcatraz Accordion</title>
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <alcatraz-accordion></alcatraz-accordion>
  </body>
</html>
```

This is a standard HTML5 template with two additions:

```html
<script type="module" src="index.js"></script>
```

and

```html
<alcatraz-accordion></alcatraz-accordion>
```

The `script` tag imports the `index.js` file where we defined our new web component. We added `type="module"` because we're using [JS modules](https://developer.mozilla.org/en-US/docs/Web/JS/Guide/Modules) in this project (e.g. `import { LitElement, html } from LitElement;`).

`<alcatraz-accordion></alcatraz-accordion>` is what actually outputs our new web component to the screen. If you kick off `polymer serve` in your terminal, and visit the link, you should see our new web component. 🎉

![Our simple Hello World component in the browser](hello-world-web-component.jpg)

Now that we can see the component works, we'll update it to have more of an accordion structure.

First, we'll update the `render` method of the component to output a `slot` rather than our &ldquo;hello world!&rdquo; text:

```js
// index.js
render() {
    return html`
      <slot></slot>
    `;
  }
```

A `slot` is like a placeholder for other content in a component. In this case, we've left our `slot` unnamed, but you can name slots to have specific areas for your component's content.

Next, we'll create a new JS file called `panel.js` to handle the panels of the accordion.

```js
// panel.js
import { LitElement, html } from 'lit-element';

class AlcatrazAccordionPanel extends LitElement {
  render() {
    return html``;
  }
}

customElements.define('alcatraz-accordion-panel', AlcatrazAccordionPanel);
```

We'll start by filling out the HTML template. Because I care about accessibility, I am going to follow the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) for my accordion.

```js
// panel.js
render() {
  return html`
    <h3>
      <button
        id="button1"
        type="button"
        aria-expanded="true"
        aria-controls="panel1"
      >
        About Me
      </button>
    </h3>
    <div id="panel1" role="region" aria-labelledby="panel1">
      <h4>Carrie Forde</h4>
      <p>Software Engineer</p>
    </div>
  `;
}
```

To view the new web component, we first need to import it into our `index.js` file, then we can add the panel to our `alcatraz-accordion` element in `index.html`.

```js
// index.js
import { LitElement, html } from 'lit-element';
import './panel';

class AlcatrazAccordion extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('alcatraz-accordion', AlcatrazAccordion);
```

```html
<!-- index.html -->
<alcatraz-accordion>
  <alcatraz-accordion-panel></alcatraz-accordion-panel>
</alcatraz-accordion>
```

Now if we refresh the browser, we should see our updated web component with the `alcatraz-accordion-panel` component.

![Accordion with panel component](accordion-panel.jpg)

```js
import { LitElement, html } from 'lit-element';

class AlcatrazAccordionPanel extends LitElement {
  constructor() {
    super();

    this.label = 'About Me';
    this.expanded = false;
  }

  static get properties() {
    return {
      label: { type: String },
      expanded: { type: Boolean }
    };
  }

  expand() {
    return (this.expanded = !this.expanded);
  }

  render() {
    return html`
      ${this.label
        ? html`
            <h3>
              <button
                id="button1"
                type="button"
                .aria-expanded="${this.expanded}"
                aria-controls="panel1"
                @click="${() => this.expand()}"
              >
                ${this.label}
              </button>
            </h3>
          `
        : null}
      <div
        id="panel1"
        role="region"
        aria-labelledby="panel1"
        .hidden="${!this.expanded}"
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('alcatraz-accordion-panel', AlcatrazAccordionPanel);
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alcatraz Accordion</title>
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <alcatraz-accordion>
      <alcatraz-accordion-panel label="K2" expanded="true">
        <p>Age: 13</p>
        <p>Color: gray</p>
      </alcatraz-accordion-panel>
      <alcatraz-accordion-panel label="Whitney">
        <p>Age: 13</p>
        <p>Color: orange</p>
      </alcatraz-accordion-panel>
      <alcatraz-accordion-panel label="Minnie">
        <p>Age: 4</p>
        <p>Color: gray</p>
      </alcatraz-accordion-panel>
      <alcatraz-accordion-panel label="Paul">
        <p>Age: 3</p>
        <p>Color: orange</p>
      </alcatraz-accordion-panel>
    </alcatraz-accordion>
  </body>
</html>
```

### Add styles

```js
import { LitElement, html, css } from 'lit-element';

class AlcatrazAccordionPanel extends LitElement {
  constructor() {
    super();

    this.label = '';
    this.expanded = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--alcatraz-accordion-item-padding, 1rem);
      }

      h3 {
        margin: 0;
      }

      button {
        background-color: var(--alcatraz-accordion-button-bg-color, #fff);
        border: none;
        display: block;
        font-size: var(--alcatraz-accordion-button-font-size, 20px);
        padding: 0;
        text-align: var(--alcatraz-accordion-button-text-align, left);
        width: 100%;
      }

      div {
        margin-top: var(--alcatraz-accordion-panel-margin-top, 1rem);
      }
    `;
  }

  static get properties() {
    return {
      label: { type: String },
      expanded: { type: Boolean }
    };
  }

  expand() {
    return (this.expanded = !this.expanded);
  }

  convertLabel(string) {
    return string.replace(/\s/g, '-').toLowerCase();
  }

  render() {
    return html`
      ${this.label
        ? html`
            <h3>
              <button
                id="button-${this.convertLabel(this.label)}"
                type="button"
                .aria-expanded="${this.expanded}"
                aria-controls="panel-${this.convertLabel(this.label)}"
                @click="${() => this.expand()}"
              >
                ${this.label}
              </button>
            </h3>
          `
        : null}
      <div
        id="panel-${this.convertLabel(this.label)}"
        role="region"
        aria-labelledby="button-${this.convertLabel(this.label)}"
        .hidden="${!this.expanded}"
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('alcatraz-accordion-panel', AlcatrazAccordionPanel);
```

## Creating a block

```js
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('alcatraz-blocks-accordion/alcatraz-blocks-accordion', {
  title: __('Alcatraz Blocks Accordion', 'alcatraz-blocks-accordion'),
  category: 'widgets',
  supports: {
    html: false
  },
  edit: () => (
    <alcatraz-accordion>
      <alcatraz-accordion-panel label="K2" expanded="true">
        <p>Age: 13</p>
        <p>Color: gray</p>
      </alcatraz-accordion-panel>
      <alcatraz-accordion-panel label="Whitney">
        <p>Age: 13</p>
        <p>Color: orange</p>
      </alcatraz-accordion-panel>
    </alcatraz-accordion>
  ),
  save: () => (
    <alcatraz-accordion>
      <alcatraz-accordion-panel label="K2" expanded="true">
        <p>Age: 13</p>
        <p>Color: gray</p>
      </alcatraz-accordion-panel>
      <alcatraz-accordion-panel label="Whitney">
        <p>Age: 13</p>
        <p>Color: orange</p>
      </alcatraz-accordion-panel>
    </alcatraz-accordion>
  )
});
```

```php
<?php
/**
 * Plugin Name:     Alcatraz Blocks Accordion
 * Plugin URI:      https://github.com/carrieforde/alcatraz-blocks-accordion.git
 * Description:     A simple plugin scaffold for a WP Content Block.
 * Author:          carrieforde
 * Author URI:      https://carrieforde.com
 * Text Domain:     alcatraz-blocks-accordion
 * Domain Path:     /languages
 * Version:         1.0.0
 *
 * @package         Block_Scaffold
 */

// Your code starts here.
add_action( 'init', 'alcatraz_blocks_accordion_init' );
/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function alcatraz_blocks_accordion_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$index_js = 'dist/alcatraz-blocks-accordion-block.js';
	wp_register_script(
		'alcatraz-blocks-accordion-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		'1.0.0',
		false
	);

	register_block_type(
		'alcatraz-blocks-accordion/alcatraz-blocks-accordion',
		array(
			'editor_script' => 'alcatraz-blocks-accordion-editor',
		)
	);
}

add_action( 'wp_enqueue_scripts', 'alcatraz_blocks_accordion_enqueue_scripts' );
/**
 *  Enqueue front end scripts.
 */
function alcatraz_blocks_accordion_enqueue_scripts() {
	if ( has_block( 'alcatraz-blocks-accordion/alcatraz-blocks-accordion' ) ) {

		$index_js = 'dist/alcatraz-blocks-accordion-component.js';

		wp_enqueue_script(
			'alcatraz-blocks-accordion-component',
			plugins_url( $index_js, __FILE__ ),
			array(),
			'1.0.0',
			false
		);
	}
}

add_filter( 'script_loader_tag', 'alcatraz_blocks_accordion_script_attributes', 10, 2 );
/**
 * Modify script attributes.
 */
function alcatraz_blocks_accordion_script_attributes( $tag, $handle ) {
	if ( 'alcatraz-blocks-accordion-component' !== $handle ) {
		return $tag;
	}

	return str_replace( "type='text/JS' src", ' type="module"  async src', $tag );
}
```

```js
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { InnerBlocks, InspectorControls } = wp.editor;
const { ToggleControl, PanelBody } = wp.components;
const { __ } = wp.i18n;

// import "./panel";

registerBlockType('alcatraz-blocks-accordion/alcatraz-blocks-accordion', {
  title: __('Alcatraz Accordion', 'alcatraz-blocks-accordion'),
  category: 'widgets',
  supports: {
    html: false
  },
  attributes: {
    multiPanel: {
      type: 'boolean',
      default: false
    }
  },
  edit: ({ attributes, setAttributes, isSelected }) => {
    const { multiPanel } = attributes;
    const onToggleChange = () => setAttributes({ multiPanel: !multiPanel });
    return (
      <Fragment>
        {isSelected && (
          <InspectorControls>
            <PanelBody title="Multi-panel">
              <ToggleControl
                label="Allow multiple panels to be open?"
                help={
                  multiPanel ? 'Multiple panels allowed' : 'Single panel only'
                }
                checked={multiPanel}
                onChange={onToggleChange}
              />
            </PanelBody>
          </InspectorControls>
        )}
        <alcatraz-accordion multiPanel={multiPanel}>
          <alcatraz-accordion-panel label="K2" expanded="true">
            <p>Age: 13</p>
            <p>Color: gray</p>
          </alcatraz-accordion-panel>
          <alcatraz-accordion-panel label="Whitney">
            <p>Age: 13</p>
            <p>Color: orange</p>
          </alcatraz-accordion-panel>
        </alcatraz-accordion>
      </Fragment>
    );
  },
  save: () => (
    <alcatraz-accordion>
      <alcatraz-accordion-panel label="K2" expanded="true">
        <p>Age: 13</p>
        <p>Color: gray</p>
      </alcatraz-accordion-panel>
      <alcatraz-accordion-panel label="Whitney">
        <p>Age: 13</p>
        <p>Color: orange</p>
      </alcatraz-accordion-panel>
    </alcatraz-accordion>
  )
});
```
