# Directives

## Usage
- Directives must be registered globally (main.js) or locally in a module
- They must be prepended with `v-`, ex.: `v-cooldirective`
- They can only be used in a HTML template

## Lifecycle hooks
- `beforeMount` - When directive is bound and host component is mounted
- `mounted` - When directive is mounted on the document
- `beforeUpdate`- Before updating the directive's inputs
- `updated` - After updating directive's inputs
- `beforeUnmount` - Before removing the directive from the document
- `unmounted` - After removing the directive from the document

Every lifecycle hook accepts 3 arguments, plus 1 extra only for `beforeUpdate`/`updated` hooks
- `el` - The host DOM element is bound to
- `binding` - Readonly. Object with args passed to the directive
- `vnode` - Readonly. Virtual DOM node reference
- `prevNode` - Only for `beforeUpdate`/`updated`. Previous Virtual DOM node before updating

## Argument, value and modifiers
Complete syntax is
```
v-DIRECTIVENAME:ARGUMENT.MODIFIER="VALUE"
```

Example directives
```html
<div v-foo:myarg.modOne.modTwo="'something'">
binding.arg = 'myarg';
binding.modifiers.modOne = true;
binding.modifiers.modTwo = true;
binding.value = 'something';

# Valid expressions
<div v-foo.modOne="'something'">
<div v-foo>
<div v-foo:arg>
<div v-foo="'something'">
```


## Extra
- `v-cloak` is an attribute that you can add to an element you want to hide, while Vue is mounting. As soon as Vue is ready, the attribute is removed. Use it to style application loading
