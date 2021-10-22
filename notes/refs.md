# Refs

Changing anything in the DOM via a ref is not reactive. A simple render cycle is

1. Data changes
2. Vue instance updates
3. Vue updates the template
4. Template gets rendered onto the DOM

In this cycle, refs can only alter the final DOM and are generally discouraged to use unless for specific cases (keeping track of a specific DOM element).
