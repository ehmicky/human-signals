# 8.0.1

## Documentation

- Improve documentation in `README.md`

# 8.0.0

## Breaking changes (types)

- The `SignalNumber` and `Signal['number']` types in TypeScript are now
  stricter. They only allow valid signal numbers like 1 or 9. They do not allow
  invalid signal numbers like -1, 1.5 or 999. Please note that 0 is not
  considered a valid signal number, although it can be passed to
  `process.kill()`.

## Types

- The `signalsByName[signalName]` and `signalsByNumber[signalNumber]` types in
  TypeScript are now `Signal` instead of `Signal | undefined`. This means you
  can now do `signalsByName[signalName].description` instead of
  `signalsByName[signalName]!.description`.

# 7.0.0

## Breaking changes (types)

- The `SignalName` and `Signal['name']` types in TypeScript are now stricter.
  They only allow valid signal names like `'SIGINT'`. They do not allow
  lowercase signals like `'sigint'` nor unknown signals like `'SIGOTHER'`.

# 6.0.0

## Breaking changes

- Minimal supported Node.js version is now `18.18.0`

# 5.0.0

## Breaking changes

- Minimal supported Node.js version is now `16.17.0`

# 4.3.1

## Bug fixes

- Remove source map comment from built package
  (https://github.com/ehmicky/human-signals/issues/15)

# 4.3.0

## Features

- Improve tree-shaking support

# 4.2.0

## Features

- Reduce npm package size

# 4.1.0

## Features

- Improve TypeScript types

# 4.0.0

## Breaking changes

- Minimal supported Node.js version is now `14.18.0`

# 3.0.1

## Bug fixes

- Fix `main` field in `package.json`

# 3.0.0

## Breaking changes

- Minimal supported Node.js version is now `12.20.0`
- This package is now an ES module. It can only be loaded with an `import` or
  `import()` statement, not `require()`. See
  [this post for more information](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

# 2.1.0

## TypeScript types

- Add [TypeScript definitions](src/main.d.ts)

# 2.0.0

## Breaking changes

- Minimal supported Node.js version is now `10.17.0`
