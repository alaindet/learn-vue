# Templates

## Global variables

- Templates can only access a small amount of [JavaScript globals](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9)
- As of Vue 2.x accessible globals from templates are
  - `Array`
  - `Boolean`
  - `Date`
  - `decodeURI`
  - `decodeURIComponent`
  - `encodeURI`
  - `encodeURIComponent`
  - `Infinity`
  - `Intl`
  - `isFinite`
  - `isNaN`
  - `JSON`
  - `Map`
  - `Math`
  - `NaN`
  - `Number`
  - `Object`
  - `parseFloat`
  - `parseInt`
  - `RegExp`
  - `require`
  - `Set`
  - `String`
  - `undefined`
