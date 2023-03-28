# Directives #1

## Modifiers

- All built-in modifiers are:
  - `v-bind`
    - `.camel` - Transform kebab-case to camelCase
    - `.prop` - Force it as DOM property
    - `.attr` - Force it as DOM attribute

  - `v-on`
    - `.stop` - Calls `event.stopPropagation()`
    - `.prevent` - Calls `event.preventDefault()`
    - `.capture` - Adds listener in capture mode
    - `.self` - Triggers handler only if element is target
    - `.{keyAlias}` - Triggers handler only on some keys (Ex.: `v-on:keydown.enter="handler"`)
    - `.once` - Triggers once
    - `.left` - Triggers only on left mouse button
    - `.right` - Triggers only on right mouse button
    - `.middle` - Triggers only on middle mouse button
    - `.passive` - Attaches a DOM event with `{ passive: true }`

  - `v-model`
    - `.lazy` - Listen to `change` and not `input`
    - `.number` - Cast input value to number
    - `.trim` - Trims the input value

## Resources
- [Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)
