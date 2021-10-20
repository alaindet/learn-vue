# Route guards

Guards are middleware functions that are run right before accessing a route
to check if it's accessible or not. There are three types of guards

- **Global guards** are run before/after each request
- **Route guards** are run before/after navigating a specific route
- **Component guards** are run before/after mounting a specific component

The complete flow of guards is
1. Navigation triggered
2. `beforeRouteLeave` on deactivated component
3. Global `beforeEach`
4. `beforeRouteUpdate` on reused component
5. `beforeEnter` on route
6. Resolve async route components
7. `beforeRouteEnter` on activated component
8. Global `beforeResolve`
9. Navigation is confirmed
10. Global `afterEach`
11. DOM update
12. Run callbacks passed to `next` in `beforeRouteEnter`
