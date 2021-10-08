# Animations

- A transition occurs when an element inside the `<transition>` built-in component enters or leave the DOM
- Vue applies **six** specific classes to elements during transitions, based on the transition name (Ex.: `<transition name="mytransition">`) and the animation phase (Ex.: `.mytransition-enter-from`)
- Transition name is "v" by default (Ex.: `.v-enter-from`)
- Conditions that trigger a transition are
  - Conditional rendering with `v-if`
  - Conditional display with `v-show`
  - Dynamic components
  - Component root nodes

## Transition classes

- `v-enter-from`
- `v-enter-active`
- `v-enter-to`

- `v-leave-from`
- `v-leave-active`
- `v-leave-to`

## Modes

- `mode="in-out"`: (Default) Entering animations happen first, then leave ones
- `mode="out-in"`: Leaving animations happen first, then entering ones
