# Glossary

## Compiling

Vue compiles templates down to DOM abstractions. Example

```
# Template
<h1 class="blue">
  <span>Hello World</span>
</h1>

# Compiled template
{
  tag: 'h1',
  attributes: {
    class: 'blue'
  },
  content: [
    {
      tag: 'span',
      attributes: {},
      content: 'Hello World'
    }
  ]
}
```

## Patching

After diffing the Virtual DOM, Vue *patches* the real DOM by applying minimum changes, bundled together if possible.
