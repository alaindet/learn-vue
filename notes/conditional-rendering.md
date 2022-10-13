# Conditional Rendering

## `v-if` vs `v-show`

- `v-if` adds/removes DOM nodes, triggering life cycles
- `v-if` is lazy and false by default and only later it evalutes to true, if needed
- `v-show` always renders and applies `display: block` or `display: none` conditionally
- `v-show` is lightweight compared to `v-if` since DOM nodes are always present compared to creating/destroying them
