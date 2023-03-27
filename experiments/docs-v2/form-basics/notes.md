# Form Basics

## `v-model`
- The heart of form handling in Vue is the built-in `v-model` directive
- `v-model` is a wrapper on multiple attributes, decided upon the input type its applied to
  - Ex.: `v-model` toggles the `checked` property when applied to a `<input type="checkbox">`
- `v-model` is the single source of truth of the input control when used, ignoring any bound `value`, `checked` ,`selected` property etc
- `v-model` should be bound to a reactive property
  - When bound to a primitive value (string, number, boolean) it just applies two-way data binding between the reactive property and the input control value
  - It can be bound to compound values like arrays (Ex.: for a checkboxes field, see *Example: Checkboxes field example* below)

### Checkboxes field example

```html
<div id="app">
  <label>
    <input type="checkbox" value="Foo" v-model="myValues"> Foo
  </label>
  <label>
    <input type="checkbox" value="Bar" v-model="myValues"> Bar
  </label>
  <label>
    <input type="checkbox" value="Baz" v-model="myValues"> Baz
  </label>
</div>
```

```jsl
new Vue({
  el: '#app',
  data: {
    myValues: [],
    // Ex.: myValues: ['Bar', 'Baz'],
  },
});
```

### Custom input form controls

This

```html
<input v-model="searchText">
```

is ultimately

```html
<input
  :value="searchText"
  @input="searchText = $event.target.value"
>
```

which means you can create components that are treated as custom input form controls

```html
<custom-input
  :value="searchText"
  @input="searchText = $event"
></custom-input>
```
