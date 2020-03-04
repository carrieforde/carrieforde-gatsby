---
title: 'Getting started with task running & Gulp'
date: 2017-10-25
category: 'Development'
---

Front-end development typically consists of many stages, including scaffolding (setting up the project environment), development of the website or application, testing, optimization, and deployment. Setting up project environments and the rest of the project workflow from scratch project after project can become cumbersome. Task runners were introduced to solve this problem. Task runners help developers manage and automate all the tasks associated with the various stages of development. In this article, I will focus on the popular task runner Gulp, and show you how to set up [Gulp](https://gulpjs.com/) with a basic tasks for compiling Sass.

## Getting started with Gulp

First thing’s first–with any task runner, you will need to make sure you have Node installed on your computer. You can either visit the [Node website](https://nodejs.org/en/) and download the appropriate package and install from there, or use [Homebrew](https://brew.sh/) (my preferred method) to install Node via the command line if you are using a Mac. To install Node via Homebrew, simply type brew install node in your terminal prompt.

Once you have Node installed, you’ll need to use NPM, the package manger that comes bundled with Node, to install Gulp. Several Node packages can be installed globally on your computer, and / or locally to your project. In this case, we’ll want to start by installing Gulp globally. Simply type the following into your terminal prompt:

```bash
npm install -g gulp-cli
```

In this command, the `-g` flag is what tells Node to install this as a global package.

Now that we have the Gulp CLI installed globally, we’re ready to get started configuring our project. If you already have a project for which you’d like to set up Sass, simply navigate to that project via your terminal. Something like this:

```bash
cd path/to/your/project
```

Otherwise, create a new directory and `cd` into the directory.

## Setting up a Gulp project

Now we’re ready to start setting up our project to use Gulp. The first step in this process is to create a package.json file, which is a manifest that keeps track of all the packages we’re using for development of a specific project. This is particularly important when we’re working on a project across a team because it allows other team members to simply clone a Git repository and install the packages with a single command, rather than going through this entire setup process.

The first step is to ensure you’re in the correct directory for your project. Once you have ensured you’re in the correct directory, we’ll need to create our package.json file by typing the following in the terminal prompt:

```bash
npm init
```

This command will prompt you for information about the project. Follow the prompts and fill out the information as best as you can. If something doesn’t seem relevant at this point, simply hit Enter to accept the default. Once you have completed the steps of `npm init`, you will see a new `package.json` file at the root of your project.

Now we’re ready to start adding Node packages!

## Adding packages

Earlier I mentioned that Node allows us to install packages globally on our computer or locally to our project. At this stage, we’re going to install all the packages we need for this specific project _locally_.

The first package we’ll install is Gulp itself. We can do this by typing the following into the terminal window:

```bash
npm install --save-dev gulp
```

This command downloads Gulp into a `node_modules` directory in the root of your project. The `--save-dev` flag tells Node to save this package under the `devDependencies` object in our `package.json` file. This means that the next developer to come along can simply run `npm install` to grab the same dependency. If you were to only type `--save` in for the flag, it would save to a `dependencies` object, which is mean for development of Node applications; `devDependencies` are dependencies that are **not** required in the production environment.

This may be a good point to stop and add `node_modules` to your `.gitignore` file. `node_modules` tends to be a hefty folder with not just our packages, but their dependencies, and other developers involved in the project can just install these dependencies themselves by running `npm install` after they have cloned the project.

While we’re in the installation stage, let’s also install the Sass package we’ll need:

```bash
npm install --save-dev gulp-sass
```

## Configuring Gulp tasks

Alright, now we have Gulp and our local packages installed, let’s go ahead and start configuring our Gulp tasks. The first thing you’ll need to do is create a `Gulpfile.js` in the root of your project.

Open the Gulpfile and add the following:

```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
  console.log('Gulp is working!');
});
```

The `var gulp = require('gulp');` line is telling Gulp to pull in the Gulp package from the `node_modules` folder.

The next few lines starting with `gulp.task` are configuring our first task, the default task, which simply prints "Gulp is working!" to the console. Go ahead and type `gulp` into the console to ensure everything is working, and that you see the "Gulp is working!" message.

Now that we’ve established the basic pattern for pulling in our packages and adding a task, let’s set up our Sass task.

### Compiling Sass with Gulp

The first thing we need to do when adding a new package for usage with Gulp is load it into our Gulpfile:

```js
var sass = require('gulp-sass');
```

Now that we have loaded sass to our file, let’s go ahead and set up the Sass task using `gulp.task()`, which takes two parameters: the name of the task, and a function which tells Gulp what to do to complete this task:

```js
gulp.task('sass', function() {
  return gulp
    .src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});
```

`gulp.src()` tells Gulp which files to process during this task using a simple glob pattern–that is, look for anything within the sass directory that has a file extension of `.scss`.

That information is then piped (using `.pipe()`, which is similar to piping via the command line) to the `sass.sync()` function, which is set up to log any errors that may occur during the processing of that task.

Finally, that output, if it didn’t error, is piped to our destination folder, in this case the project root, where we should find our compiled CSS file.

The “guts” of a Gulp task is essentially a function that returns our output.

Now, if we have some Sass files in the Sass directory, we can run `gulp sass` from the command line, and we should see our compiled file in the root of the project.

## Automating with Gulp

As you can imagine, running gulp sass every time you need to compile your stylesheets becomes cumbersome quickly. Let’s go ahead and add a task which will automatically compile our Sass every time we save a file, called `watch`:

```js
gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass']);
});
```

This task simply takes our initial glob pattern from `gulp sass`, and tells the `watch` method to watch for changes within files that match this pattern (you can also pass an array of several directories), and the second parameter tells the watch method which task(s) to run when a change is detected.

So now, when we want to work on our Sass, we can simply type gulp watch into the terminal, and anytime a file is saved, Gulp will automatically run our gulp sass task.

## Wrapping up

This tutorial is just the tip of the Gulp iceberg. There are so many other helpful Gulp packages that can be added and configured to automate the development process. You can process stylesheets with PostCSS, concatenate and minify JavaScript, control versioning, and even deploy your sites or applications with Gulp. I encourage anyone looking to learn more to check out the [Gulp website](https://gulpjs.com/), [read the Gulp docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md), or search for [Gulp plugins](http://gulpjs.com/plugins) to further explore the possibilities.

In the meantime, if you’re looking for jump start, check out my [Getting Started with Task Running & Gulp Gist](https://gist.github.com/carrieforde/055a2f29a6085d9c8d4ab35ce6ede239) for a `package.json` and `Gulpfile.js` that will get you started with Sass compilation, CSS & JS minification, and more. 😀
