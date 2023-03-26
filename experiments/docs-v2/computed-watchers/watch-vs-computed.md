# `watch` vs `computed`

- A computed property could be seen as a specific use case for `watch`
- Computed properties should be preferred to calculate derived state because they're memoized (cached)
- Computed properties are very similar to React's `useMemo()` hook
- The `watch` property and its methods is a more generic way to react to state changes in Vue and should be used only when computed properties are not fit for the problem
- Watchers are very similar to React's `useEffect()` hook
