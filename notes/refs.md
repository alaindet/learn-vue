# Refs

Changing anything in the DOM via a ref is not reactive. A simple render cycle is

1. Data changes
2. Vue instance updates
3. Vue updates the template
4. Template gets rendered onto the DOM

In this cycle, refs can only alter the final DOM and are generally discouraged to use unless for specific cases (keeping track of a specific DOM element).

# `ref` vs `reactive`
- `reactive` returns a `Proxy`'d object based on the original data you pass it
- `reactive` wraps each property of the proxy object with a nested `Proxy` so that reactivity is granted even by accessing nested properties
- `reactive`'s "deep reactivity" can be turned off for performance by using `shallowReactive`
- `reactive` only works with objects (objects, arrays, `Map`, `Set` etc) and **NOT** with primitive types (strings, numbers, booleans)
- `reactive` grants reactivity with references, but references are lost when
  - re-assigning the whole object
  - passing the object to a function
- `ref` allows any value type
- `ref` returns a reference to a Proxy
- `ref` values must be usually accessed via `.value`, but its value is automatically unwrapped when
  - Using a ref in `<template>`
  - Using a ref to declare a `reactive` object
  - Using a ref to declare an array or a Map
- `ref`s can be replaced, destructured and passed to functions without losing reactivity
