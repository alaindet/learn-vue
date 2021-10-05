# Webpack and Babel

## Webpack

Webpack has four main concepts
- Entry
- Output
- Loaders
- Plugins

### Entry

Input file(s)

### Output

Output file(s)

### Loaders

Third-party middlewares to understand various file types, like SCSS or TypeScript

### Plugins

Allows Webpack to extend funcionalities, like running servers, delete files, deploy app

## Babel

It's a standalone tool composed by three main modules
- Babel Core
- Babel Preset
- Babel Loader

### Babel Core

Core functionality, mainly converts new JS syntax

### Babel Preset

A set of common settings for treating specific versions of JS or popular frameworks, ex.: `@babel/preset-typescript`, `@babel/preset-react`. The most used and table is `@babel/preset-env`

### Babel Loader

Connects Babel and Webpack
