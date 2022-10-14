# Event Handling

- Vue reacts to native and custom events via the `v-on` directive
- Usually the `v-on` directive is abbreviated with `@`
  ```html
  <button v-on:click="theHandler">Click me</button>
  <button @click="theHandler">Click me</button>
  ```
- Event handlers can be declared inline or as references
- Inline handlers are either simple or refer to some existing method
- Native/custom events are implicitly sent only to method handlers
  ```html
  <!-- theHandler receives the native MouseEvent -->
  <button @click="theHandler">Click me</button>
  ```

- **Modifiers** are utilities to perform common tasks on event handlers, like `preventDefault()`, `stopPropagation()` etc.
- Modifiers are used like this
  ```html
  <a @click.stop="someHandler"></a>
  <a @click.stop.prevent="someHandler"></a>
  <form @submit.prevent="someHandler"></form>
  <form @submit.prevent></form>
  <div @click.self="someHandler">...</div>
  ```
- Basic Modifiers are
  - `.stop`
  - `.prevent`
  - `.self`
  - `.capture`
  - `.once`
  - `.passive`
- There are some key modifiers triggering only on some specific keyboard keys pressed
  - `.enter`
  - `.tab`
  - `.delete` (captures both "Delete" and "Backspace" keys)
  - `.esc`
  - `.space`
  - `.up`
  - `.down`
  - `.left`
  - `.right`
  ```html
  <input @keyup.enter="submit" />
  <input @keyup.page-down="onPageDown" />
  ```
- System Modifier trigger the handler only when the event is fired while holding some keys like Ctrl, Alt, Shift and Super (ex.: Windows key)
  - `.ctrl`
  - `.alt`
  - `.shift`
  - `.meta`
  ```html
  <input @keyup.alt.enter="clear" />
  <div @click.ctrl="doSomething">Do something</div>
  ```
- Mouse button modifiers
  - `.left`
  - `.right`
  - `.middle`
