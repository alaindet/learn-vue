# Forms

- Vue provides some utilities to bind and receive values from form elements (input, select etc)
- The `v-model` is at the core of how Vue interacts with form elements
- `v-model` adapts to different form elements by binding a given value to the `value` property of the element and listening to the form element's output
- For a simple `<input>`, these two elements are equivalent
  ```html
  <input :value="myValue" @input="event => myValue = event.target.value" />
  <input v-model="myValue" />
  ```
