# Lists

## `v-for`
- `v-for` is a built-in directive for looping over arrays
- Syntax is
  ```html
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
  ```
  of
  ```html
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      #{{ index}} {{ item.text }}
    </li>
  </ul>
  ```
