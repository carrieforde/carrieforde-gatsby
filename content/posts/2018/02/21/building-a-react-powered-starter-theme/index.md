---
title: "Building a React-powered starter theme"
date: 2018-02-21
category: "WordPress"
---

As I near the final stretch in my Bov Academy studies, it’s time for me to choose a final project. For my final project, I have decided to capitalize on my love of JavaScript + WordPress. So, in this post, I want to introduce [Aurora Theme](https://aurorathe.me/)–a React-powered starter theme for WordPress.

So maybe you’re thinking, “why is she sharing something she hasn’t even started?” That’s a great question. I thought it’d be pretty neat to document the entire journey of building this thing. To many of us in the WordPress community, this whole REST API thing is still a foreign concept. Breaking our traditional PHP theme paradigm is going to take time. It’s going to take research. And it may not be pretty. I already have questions about implementation of things in the back of my mind, and I’m hoping to answer these questions as I go, and share them with the community. Of course, if you’re reading one of these posts, and you have questions, speak up and ask in the post comments, or [@me on Twitter](https://twitter.com/carrieforde). Let’s help each other. With that, let’s get this thing started. Read on below for a detailed project plan.

## Business Justification

The WordPress REST API was merged into WordPress Core in December 2015. The REST API gives developers a modern way of interacting with WordPress using modern JavaScript techniques and technologies. By default, WordPress ships with endpoints to interact with standard post types (posts and pages), but it can be extended to create custom endpoints which may include post meta, or anything else one might need from the database.

Implementation of the REST API gives WordPress users and developers several advantages. WordPress can continue to operate as a familiar and robust backend for data storage and delivery, while making the data itself more accessible to other platforms. Decoupling data delivery from the content management system (CMS) makes WordPress more accessible to a broader audience. For example, building a frontend to consume WordPress data no longer requires knowledge of the WordPress theming system. It frees developers up to consume their data in whatever way is necessary from use in websites, to apps, and other third party services. Instead of WordPress being the solution for a website, it can be a building block in the foundation of a user’s larger application.

Even though the REST API has been part of WordPress for nearly two years, adoption of the API has been slow, and there are few themes utilizing the features of the REST API. There are even fewer “starter” themes built on the REST API. To date, most REST API-driven projects have been limited to the “high end” spectrum of client sites. But with the imminent integration of [Gutenberg](https://wordpress.org/gutenberg/), JavaScript technologies are becoming an increasingly integral part of the WordPress experience.

Aurora will be a starter theme built to utilize the features of the standard endpoints in the WP REST API, and will use modern JavaScript technologies including ES Next and React. Aurora will finally make REST API-driven sites and technology more accessible to the everyday WordPress user and developer.

## Requirements & Objectives

Any starter theme built for WordPress needs to give developers a leg up in the development process, but should not include so many features that it becomes burdensome to work with. To that end, it is incredibly important that Aurora remain relatively un-opinionated, yet provide the basic features one might expect of a functional WordPress theme (i.e. if you install and activate the theme, it shouldn’t look like a dumpster fire). Ideally, any opinionated elements (e.g. styling) could easily be blasted away, giving the next developer a clean slate.

To that end, Aurora will support modern JavaScript development techniques, and give developers a solid foundation for starting a REST API project. Including documentation support is especially integral to the success of Aurora. Since WordPress has long been in the PHP-based theme paradigm, it’s important to have a well-documented theme to help PHP developers transition to writing JavaScript-driven themes.

Aurora will be a clean, modern theme with the following features:

- Sass
- ES Next + React
- Icon (SVG) management
- Linting according the [WordPress Coding Standards](https://codex.wordpress.org/WordPress_Coding_Standards) using PHPCS, ESLint, and Stylelint
- Documentation support

### Requirements

- Support default post types (post, page, nav-menu, \* comments)
- Well-documented
- Easy to understand
- Extensible
- Performant
- Accessible
- Gutenberg-ready

### Objectives

- Adheres to WordPress Coding Standards for PHP, styling (CSS), and JavaScript.
- Complies with Section 508 and WCAG 2.0AA accessibility standards.
- Meets WordPress internationalization and localization guidelines.
- Use techniques including Atomic Design to keep the theme files organized and easy to understand.

## Project Scope / Deliverables

At this time, Aurora will only consist of the starter theme. Future implementations may include:

- Extensibility via the command line–easily spin up reusable components via a command line integration (e.g. Yeoman), which will be hosted indepently from the theme (likely via a branch of Aurora Project).
- Gutenberg components. Support for default Gutenberg components will exist, but new components are not in scope for the initial phase of the project.
- A plugin for interacting with Custom Post Types / Custom Endpoints.

### Aurora

Aurora will be a clean, elegant starter theme with simple styling, and basic components, to help developers get started on their WordPress REST API theme projects.

- Use [Aurora Project](https://github.com/carrieforde/aurora-project) (the non-theme boilerplate) as the base setup for the theme
  - Tweak Aurora Project Webpack setup to work with WordPress (keeping in mind that hot module replacement doesn’t work in WordPress).
    - Browser Sync
- Use [Underscores](http://underscores.me/) for some of the base theme files
  _ header.php (pulls in styles and head scripts)
  _ footer.php (pulls in scripts)
  _ index.php (a fall back if our JS fails)
  _ 404.php? \* functions.php
- Theme components (React components)
  - Header
  - Navigation (this might be a challenge given that there is no clear way of interacting with menus via the default endpoints)
  - Footer
  - Archive (home, categories, tags, etc.)
  - Single post / page
  - Sidebar (I’m really curious about supporting widgets via the REST API)
  - 404
  - Search results (maybe this is the same as the archives?)
  - Social icons (menu)
  - Comments
- How should the theme interact with the Customizer?
  - Custom logo
  - Site title
  - Site tagline
  - Site icon (favicon)
  - Sidebar (no sidebar, sidebar right, sidebar left)
  - Widget area(s) for the footer ([see Alcatraz](https://github.com/carrieforde/alcatraz))
  - Footer copyright text
- Testing (Mocha? Jest? other?)
- Performance metrics
- Type checking
  - Flow?
  - TypeScript?
- Documentation
  - Sass documentation
  - Component documentation (KSS? Storybook?)

## Resources

- [Aurora Project](https://github.com/carrieforde/aurora)
- [Alcatraz](https://github.com/carrieforde/alcatraz)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [WordPress template hierarchy](https://wphierarchy.com/)
- [Underscores](http://underscores.me/)
- [Sassdoc](http://sassdoc.com/)
- [KSS Node](https://github.com/kss-node/kss)
- [Storybook](https://storybook.js.org/)
- [Talking to 25 Percent of the Web](https://humanmade.com/2016/01/14/introducing-our-wordpress-rest-api-white-paper/) (HumanMade white paper)
