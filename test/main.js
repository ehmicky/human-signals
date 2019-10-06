import test from 'ava'
import { each } from 'test-each'
import fastDeepEqual from 'fast-deep-equal'

import { signalsByName, signalsByNumber } from '../src/main.js'

each(
  [
    { title: 'signalsByName', signals: signalsByName },
    { title: 'signalsByNumber', signals: signalsByNumber },
  ],
  /* eslint-disable max-nested-callbacks */
  ({ title }, { signals }) => {
    test(`Object | ${title}`, t => {
      t.true(typeof signals === 'object')
    })

    test(`signal.name | ${title}`, t => {
      t.true(
        Object.values(signals).every(
          ({ name }) => typeof name === 'string' && name.startsWith('SIG'),
        ),
      )
    })

    test(`signal.number | ${title}`, t => {
      t.true(
        Object.values(signals).every(
          ({ number }) => Number.isInteger(number) && number >= 1,
        ),
      )
    })

    test(`signal.description | ${title}`, t => {
      t.true(
        Object.values(signals).every(
          ({ description }) => typeof description === 'string',
        ),
      )
    })

    test(`signal.action | ${title}`, t => {
      t.true(
        Object.values(signals).every(({ action }) => ACTIONS.includes(action)),
      )
    })

    const ACTIONS = ['terminate', 'core', 'ignore', 'pause', 'unpause']

    test(`signal.priority | ${title}`, t => {
      t.true(
        Object.values(signals).every(
          ({ priority }) => typeof priority === 'boolean',
        ),
      )
    })

    test(`signal.source | ${title}`, t => {
      t.true(
        Object.values(signals).every(({ source }) => SOURCES.includes(source)),
      )
    })

    const SOURCES = ['ansi', 'posix', 'bsd', 'systemv', 'other']
  },
  /* eslint-enable max-nested-callbacks */
)

test('Object keys | signalsByName', t => {
  t.true(Object.entries(signalsByName).every(([key, { name }]) => key === name))
})

test('Object keys | signalsByNumber', t => {
  t.true(
    Object.entries(signalsByNumber).every(
      ([key, { number }]) => key === String(number),
    ),
  )
})

test('Same signals', t => {
  t.true(
    Object.values(signalsByNumber).every(signal =>
      fastDeepEqual(signal, signalsByName[signal.name]),
    ),
  )
})
