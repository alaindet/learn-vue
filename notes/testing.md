# Testing

- In general, a test passes if outcomes match expected outcomes
- The most used library is `Jest` by `Facebook` (now `Meta`)
- Alternatives are `Mocha`, `Jasmine`, `Karma`
- A `Sanity test` is a test to check if tests can run

## Types of testing
- **E2E testing** (End-to-end testing): broad test, can involve network, multiple components, state
- **Snapshot testing**: based on comparison of snapshots taken at different times
- **Unit testing**: smallest area, tests single functions and/or components

## Coverage

A good test coverage has roughly this ratio
- 60% Unit testing
- 30% Snapshot testing
- 10% E2E testing

## Golden rule
If the test is not saving manual testing time, don't write it

## Jest
Jest defines a number of global utility functions that you can use inside any test file without importing them. Reference [here](https://jestjs.io/docs/api). Ex.: `it()`, `describe()`, `test()`

### `describe`
Groups together two or more tests in a **test suite**
