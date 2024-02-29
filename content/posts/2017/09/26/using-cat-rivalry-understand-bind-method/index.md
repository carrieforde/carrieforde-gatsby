---
title: Using cat rivalry to understand the <code>bind()</code> method
date: 2017-09-26
category: JavaScript
---

A few weeks ago, I used the rivalry between my girl cats, Whitney and Minnie, to solidify my understanding of JavaScript’s `bind()` method. I thought I’d share it because let’s be honest, the MDN explanation of `bind()` is confusing:

> The `bind()` method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

## A plain English explanation of `bind()`

The JavaScript `bind()` method allows developers to rebind or “rescope” the `this` keyword. When working with objects, and functions within objects, `this` refers to the object within which we are working. For example, in the the code below, `this` within the `getKittyInfo()` method refers to the `kitten` object:

```js
var nemesis = "dog";
var kitten = {
  name: "Whitney",
  age: 11,
  color: "orange",
  markings: "torbie",
  nemesis: "Minnie",
  getKittyInfo: function () {
    console.log(
      this.name +
        " is an " +
        this.age +
        " year-old " +
        this.color +
        " " +
        this.markings
    );
  },
};
kitten.getKittyInfo();
```

Output:

```
"Whitney is an 11 year-old orange torbie"
```

## Where things get confusing

However, whenever a function is _inside_ another function, `this` is bound to the **global** object.

So, when we add the `archNemesis()` within `getKittyInfo()`, our `archNemesis()`'s `this` is instead bound to the global object (i.e. `nemisis`) instead of our kitten object:

```js
var nemesis = "dog";
var kitten = {
  name: "Whitney",
  age: 11,
  color: "orange",
  markings: "torbie",
  nemesis: "Her younger sister, Minnie",
  getKittyInfo: function () {
    console.log(
      this.name +
        " is an " +
        this.age +
        " year-old " +
        this.color +
        " " +
        this.markings
    );
    function archNemesis() {
      console.log("Arch nemesis: " + this.nemesis);
    }
    archNemesis();
  },
};
kitten.getKittyInfo();
```

Output:

```
"Whitney is an 11 year-old orange torbie" "Arch nemesis: dog"
```

When `archNemesis()` is called, the result of nemesis is `dog` because it is accessing the **global** object (i.e. our `nemesis` variable created right before our kitten object. In order to get `archNemesis()` to use the `nemesis` defined within our `kitten` object, we’ll need to bind the `archNemesis()` function like so:

```js
var boundNemesis = archNemesis.bind(this);
```

This tells our function that we’d prefer to use our `kitten` object’s this instead of the global this.

In the final example below, you can see how this was done within the kitten object’s `archNemesis()` function:

```js
var nemesis = "dog";
var kitten = {
  name: "Whitney",
  age: 11,
  color: "orange",
  markings: "torbie",
  nemesis: "Her younger sister, Minnie",
  getKittyInfo: function () {
    console.log(
      this.name +
        " is an " +
        this.age +
        " year-old " +
        this.color +
        " " +
        this.markings
    );
    function archNemesis() {
      console.log("Arch nemesis: " + this.nemesis);
    }
    var boundNemesis = archNemesis.bind(this);
    boundNemesis();
  },
};
kitten.getKittyInfo();
```

Output:

```
"Whitney is an 11 year-old orange torbie"
"Arch nemesis: Her younger sister, Minnie"
```

Hopefully this example has also helped you wrap your head around `bind()`.
