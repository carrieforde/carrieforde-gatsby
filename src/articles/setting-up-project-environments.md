---
title: Setting up project environments
date: 02/23/2018
---

I’m gonna be straight with ya. The main reason I wanted to write this post was because I successfully utilized Let’s Encrypt to add an SSL certificate to aurorathe.me. And SSHing into a remote server, and not breaking it (in fact, making at least some part of it more secure) feels like black magic. So today, let’s make this a broader discussion and talk about the project environments I set up to work on Aurora Theme.

## Working Locally

Talking about local development environments sometimes feels like a contentious subject. In the WordPress space, each person seems to have rather strong opinions about why their local dev environment is best. I’m not here to tell you what to use. Hell, I don’t care. What’s important is that you have a local environment that works for you. But if your machine sounds like it’s ready for takeoff, maybe it’s time to consider an alternate option. 😉

### Choosing a WordPress environment

I’ve been wavering between Local by Flywheel and VVV for the past year. Local is great because it has a simple interface, and spinning up a new site is super easy. I also really like how it comes preconfigured with MailHog (so you can check emails sent from your local domain), and accessing a site’s database is as easy as clicking a button. VVV, on the other hand, is a command line utility, and offers endless configuration options. Need to test something on an older version of WordPress? No problem. You can adjust that over the command line. Prefer interacting with things over the command line? VVV has you covered.

I swap between using my 2015 MacBook (the little 12-inch retina number) and my 2016 MacBook Pro (the 15-inch version). I mention this because it really doesn’t matter what I use on my MacBook. It has no fans so it never sounds like I’m on an airport runway. My MBP, however, does have fans, and Local + VS Code seems super problematic on that machine for one reason or another. I’m super tempted to try VVV on my MBP, and use Local on the other (which is actually the only option on that machine).

### Writing code

I feel pretty strongly about VS Code. I’ve been using it for just over a year, and made the switch because Brackets just couldn’t handle an entire wp-content folder for an enterprise-level site. I shopped around for about a week trying Sublime, Atom, and PHPStorm, but VS Code stood out because it was the most Brackets-like (hello integrated version control! 👋), but also had some of the neat features I quickly got hooked on in Sublime (Cmd + P quick file browsing for the win!). Setting up all my editor tools (linting, snippets, etc.) was super quick and easy, and turned out to be the least painful of all the options. It doesn’t hurt that it already includes most of the “necessities.”

Focusing mostly on JavaScript development over the past few months has made me love VS Code even more. It has incredibly robust debugging features, and is packed with all kinds of goodies that make modern JS development a breeze. For example, recently I’ve been doing a lot more work with ES6 modules, and I love how VS Code can guess which module I’m importing as a type. HELL YEAH!

Keeping code under [version] control
Git is essential. I use it on basically every project, and Aurora Theme will be no different. I’ll be keeping two repos for this project:

1. for the theme itself
2. for the entire wp-content directory, which includes both the plugins and themes directories, to manage deployments

I probably could avoid managing the entire wp-content directory, but if I need to add a plugin during development, which will also need to be deployed, I don’t want to waste time on managing these things separately. Since Git lends itself nicely to a deployment discussion, let’s move along to remote environments.

## Deployments & production

Aurora Theme is a journey. A terrifying journey into my development and thought process. aurorathe.me is the production site, but this is a personal project, and I want to share my journey while developing the theme. So, I am going to push everything straight to production. Clearly, if I get to a point in a few months where Aurora is stable, and I want to only focus on minor changes, I’ll revisit this approach.

### The production environment

I was introduced to Webfaction during my MIGHTYminnow days, and I’ve been pretty hooked on it every since. Webfaction bills itself as “hosting for developers,” offering a lot of storage, bandwidth, and memory for \$10 a month. What I ❤ about Webfaction is how easy it is to spin up a new site. Instead of wasting time manually installing something like WordPress, you add a new application to your domain, and Webfaction does the heavy lifting. And there is no shortage of configuration-free options available, so if you’ve always wanted to dabble in Django, Node, Rails, etc. it’s easy to spin up a new installation.

The one thing I did differently with aurorathe.me was set up SSL using Let’s Encrypt, which is a free SSL certificate authority. Because aurorathe.me is my production site, I wanted to make sure I had SSL up and running from the start.

### Let’s Encrypt + Webfaction

At the beginning of this post, I mentioned how SSH-ing into a remote server and not breaking everything feels like sorcery. Well, that applies here. Following the chosen answer from this post on the Webfaction forums, plus a helping hand from this post on adding Socat to Webfaction got me sorted out in about 15 minutes. And now that I have both acme.sh and Socat tools set up, adding SSL certificates to new domains is as easy as:

```
Le_HTTPPort=77777 acme.sh --issue -d mydomain.com -d www.mydomain.com --standalone
```

### More Magic with WP-CLI 🧙‍♀️

The super sweet thing about working with the REST API is that I only need my data in one place. Because I’m in the super-early development phase, and I don’t have any specific requirements for data, I’m using the WP-CLI + Jay Wood’s WP-CLI Random Posts package to generate data for my site (complete side note here, but Jay is amazing. If you ever have an opportunity to work with him, you are incredibly lucky. He’s so happy to share his knowledge with kindness and patience, and that, my friends, is truly amazing 💫). So a little more SSH sorcery with wp jw-random generate 25 --featured-image --img-type=business, and I’ve got myself 25 posts with featured images to work with both locally and remotely. 💥

### Deployments

So, how does code get from my machine to production? Well, it’s a magical combination of Git + Github + DeployHQ = ✨.

The beauty of DeployHQ is that it can be set up to automatically deploy to the remote server every time there is a push to the master branch of my project (in this case, the repo with wp-content). There is no mucking about with an FTP client, and I don’t have to remember anything. Of course, it’s totally possible to manually deploy the project, which is what I’d generally recommend for a production site. But again, this particular project, I’ll opt for automatic deployments to keep my environments up-to-date, and let you, friend, follow along.

## Project Management

I’d be remiss if I didn’t mention how I’m keeping track of project deliverables, and making sure that I keep this project moving forward. I used to use Basecamp for managing my freelance and personal projects. But paying \$30+ a month for just personal projects was a bit steep. More recently, I moved over to Trello, and it’s been pretty perfect. (Want to follow along? Check out the Aurora Theme Trello board.)

Creating lists for each “project phase” is really helpful for me to plan out entire projects, and see the bigger picture. And within each list, I have a card for each “bigger” task that needs to be completed. Some cards have checklists within them, others just have general notes to remind me what I was thinking. I really like that cards can then be shuffled around to “In Progress” or “Complete” lists, and it’s easy to see that progress that’s been made. Or maybe you just want to use labels to denote what’s in progress and what’s complete instead. That’s the beauty of Trello, there are endless possibilities for organizing things.

Whew, that’s a lot, right? 😅 Being organized up-front is super important to the success of any project, but I almost think it’s more important when working on a personal project. It’s so easy to get distracted (anyone else suffer from shiny object syndrome?), and having a concrete plan, with concrete steps is important to achieving your project’s goals. This is probably the most organized I’ve been for a personal project, but I also feel like I’ve really set myself up for success.
