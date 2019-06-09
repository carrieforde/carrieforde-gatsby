---
title: 'Going Gatsby'
date: 2019-05-26
category: 'Development'
description: 'After six years with WordPress, I switched to Gatsby&ndash;a static site generator.'
---

[Gatsby](https://www.gatsbyjs.org/) seems to be the new hotness in the front end community. A large part of Gatsby's appeal is that it's based on React, and gives developers a lot of flexibility in where the data layer lives.

I was drawn to Gatsby on the promise of getting a "blazing fast website." [Version 4](https://github.com/carrieforde/carrieforde-theme) of my site was actually pretty fast. I had hosting on Flywheel and the indicators in my Lighthouse audits consistently hit green, but I was always bothered by the fact that **all** my CSS was enqueueing even if significant portions of it weren't used. Clearly, this is less important on a small personal site than it is, say, a large enterprise site, but it still bothered me.

Another thing about Gatsby that piqued my interest were folks like [Zac Gordon](https://twitter.com/zgordon) who is [using Gatsby as a front end with the WordPress as the backend](https://github.com/zgordon/tabor-gatsby-theme). I started down this route with Gatsby on the front end, and WordPress powering the back end. I had all my blog posts showing after a few hours of set up familiarizing myself with Gatsby and [GraphQL](https://graphql.org/). But it still felt cumbersome, and I wasn't happy with where things were going. There was too much context switching between the code and WordPress, and I wanted to see if I could find a more streamlined solution.

## Gutenberg is great&hellip;until you need custom components

In my current role at [FFN](https://freedomfinancialnetwork.com), I spend a lot of time developing custom blocks for the [FDR](https://www.freedomdebtrelief.com) website. I put a lot of thought into whether a block can be reused / repurposed, whether a new style can be added to an existing block, or if I need to create something from scratch. If I create something from scratch, how explicit do pieces of the block need to be? Can I get away with using `<InnerBlocks />` and templates? How does one make a block both flexible, yet unbreakable?

The "problem" with Gutenberg is that developers on are the hook to deliver both an editing experience, **and** front end experience (i.e. presentational experience) for custom content blocks. When it comes to my personal site, I just want to figure out how to feed the data into a component, not how I should compose a bunch of input fields, color selectors, etc. At the end of the day, I just wanted a site to introduce myself, highlight my professional experience, and host a blog. Continuing down the path of WordPress seemed a little heavy-handed for my needs.

Gutenberg adds a certain amount of friction that I don't want to bother with in my free time. By using React, I can create components for different parts of my site, and just feed them static data (like I have for the home page of my site), or dynamic data (like I have for the blog). Of course you can do this with Gutenberg, but unlike Gutenberg, I didn't have to worry about creating a separate editing experience. I can just pull in a component, feed it data, and go.

## Markdown to the rescue

I started development with `gatsby-starter-default`. No frills, no opinions, and just enough to get me started on this Gatsby journey. I started design and development with the blog. It was the piece of Version 4 I was least happiest with, and I wanted to see if I could get an improved version done quickly. I'd tried spending time fixing up the blog design in Version 4, but I'd get distracted by creating custom blocks for other parts of my site.

Because I use markdown on a near-daily basis and am intimately familiar with the syntax. Even within WordPress, I often reach for markdown shortcuts, like `##` for creating `h2`s. So leaning 100 percent into markdown as my content management solution seemed right. After adding `gatsby-transformer-remark` to my project, I added a content folder and a blog post to get started.

One thing I love about `gatsby-transformer-remark` (and markdown for static site generators generally), is that it supports frontmatter&ndash;a flexible way of managing information about a piece of content. If you're trying to correlate this with WordPress, frontmatter may include the post title, categories & tags, publish date, post status, template, or any information you may store in post meta. For blog posts, I decided to start small and keep it to title, date, and category.

So now instead of adding this information in specific input fields on a post screen, I add the frontmatter to the top of my post, which typically looks something like this:

```md
---
title: 'Going Gatsby'
category: 'Development'
description: 'After six years with WordPress, I switched to Gatsby&ndash;a static site generator.'
date: 2019-06-03
---
```

The rest of the content can be managed with regular markdown, and when absolutely necessary, I can either use HTML to spin up a quick, one-off element **or** use a custom [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) like this info alert:

<cf-alert type="info">
    This is an info alert web component.
</cf-alert>

## An improved editing experience

This is the first post I've written using my new Gatsby site, but one thing I already notice that I like better is the near-instant feedback I get when I save a post. When I save the post, and move back to the browser, my changes are there. No hitting save (or worry about accidentally hitting publish), no special previews, no refreshing. Hell, I don't even have to hit save because my editor is get to autosave every time I click away from it.

It's always been easier for me to spot mistakes in my writing in it's real-world context (i.e. the single post), than it is in an editing screen, or even within my code editor. Being able to see that feedback nearly instantly makes it much easier to review what I've written and revise it on the fly.

To be clear, I still love WordPress. I think that it's perfect for folks who don't want to muck around with code, and can get by with the existing block ecosystem (which is growing every day). But if you're a developer, and you find the block-based system a little cumbersome, it might be worth exploring Gatsby.
