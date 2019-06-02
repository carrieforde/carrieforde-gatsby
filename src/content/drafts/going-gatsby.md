---
title: 'Going Gatsby'
date: 2019-05-26
category: 'Development'
description: 'After six years with WordPress, I switched to Gatsby&ndash;a static site generator.'
---

[Gatsby](https://www.gatsbyjs.org/), a static site generator, seems to be the new hotness in the front end community. A large part Gatsby's appeal is that it's based on React, and gives developers a lot of flexibility in where the data layer lives. I was drawn to Gatsby on the promise of getting a "blazing fast website."

## But why?

I released [version 4](https://github.com/carrieforde/carrieforde-theme) of my site in a rush last year as I was preparing for my job search post-bootcamp. I wanted to have homepage that quickly distilled my experience, but was more polished than [version 3](https://github.com/carrieforde/Carrie-Forde-3)

### Gutenberg is great&hellip;until you need custom components

In my current role at [Freedom](https://freedomfinancialnetwork.com), I spend a lot of time developing custom blocks for the [FDR](https://www.freedomdebtrelief.com) website, so I'm accustomed to knocking custom components out fairly quickly. But as a developer, it's _excessive_ to create both an `edit` and `save` experience for a block that may have limited reuse. I put off updating and redesigning my site for more than a year because of this.

With Gatsby, I can use React to quickly spin up a new component, and either feed that component static content, or markdown via `gatsby-transfomer-remark`. No fussing with creating custom meta (`frontmatter` to the rescue!), no creating an editing experience, just 100 percent focus on creating a slick front end, and feeding content to components.

To be clear, I still love WordPress. I think that it's perfect for folks who don't want to muck around with code, and can get by with the existing block ecosystem (which is growing every day).
