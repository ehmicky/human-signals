[![Codecov](https://img.shields.io/codecov/c/github/ehmicky/human-signal.svg?label=tested&logo=codecov)](https://codecov.io/gh/ehmicky/human-signal)
[![Travis](https://img.shields.io/badge/cross-platform-4cc61e.svg?logo=travis)](https://travis-ci.org/ehmicky/human-signal)
[![Node](https://img.shields.io/node/v/human-signal.svg?logo=node.js)](https://www.npmjs.com/package/human-signal)
[![Gitter](https://img.shields.io/gitter/room/ehmicky/human-signal.svg?logo=gitter)](https://gitter.im/ehmicky/human-signal)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-4cc61e.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-4cc61e.svg?logo=medium)](https://medium.com/@ehmicky)

Human-friendly process signals.

This is a map of known process signals with some information about each signal.

Unlike
[`os.constants.signals`](https://nodejs.org/api/os.html#os_signal_constants)
this includes:

- human-friendly description, default action and priority
- signals not supported by the current OS, which means you can safely use this
  on any platform

# Example

```js
const { signalsByName, signalsByNumber } = require('human-signal')

console.log(signalsByName.SIGTERM)
// {
//   name: 'SIGINT',
//   number: 2,
//   description: 'User interruption with CTRL-C',
//   action: 'terminate',
//   priority: false,
//   standard: 'ansi'
// }

console.log(signalsByNumber[8])
// {
//   name: 'SIGFPE',
//   number: 8,
//   action: 'core',
//   description: 'Floating point arithmetic error',
//   priority: false,
//   standard: 'ansi'
// }
```

# Install

```bash
npm install human-signal
```

# Usage

## signalsByName

_Type_: `object`

Object whose keys are signal [names](#signalname) and values are
[signal objects](#signal).

## signalsByNumber

_Type_: `object`

Object whose keys are signal [numbers](#signalnumber) and values are
[signal objects](#signal).

## signal

_Type_: `object`

### signal.name

_Type_: `string`

Standard name of the signal, for example `'SIGINT'`.

### signal.number

_Type_: `number`

Code number of the signal, for example `2`. While most `number` are
cross-platform, some are different between different OS.

### signal.description

_Type_: `string`

Human-friendly description for the signal, for example
`'User interruption with CTRL-C'`.

### signal.action

_Type_: `string`<br>_Enum_: `'terminate'`, `'core'`, `'ignore'`, `'pause'`,
`'unpause'`

What is the default action for this signal when it is not handled.

### signal.priority

_Type_: `boolean`

Whether the signal's default action cannot be prevented. This is `true` for
`SIGTERM`, `SIGKILL` and `SIGSTOP`.

### signal.standard

_Type_: `string`<br>_Enum_: `'ansi'`, `'posix'`, `'bsd'`, `'systemv'`, `'other'`

Which standard defined that signal.

# Support

If you found a bug or would like a new feature, _don't hesitate_ to
[submit an issue on GitHub](../../issues).

For other questions, feel free to
[chat with us on Gitter](https://gitter.im/ehmicky/human-signal).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

<!-- Thanks go to our wonderful contributors: -->

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/human-signal/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/human-signal/commits?author=ehmicky" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->
