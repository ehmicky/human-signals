import { isDeepStrictEqual } from 'node:util'

import Ajv from 'ajv'
import test from 'ava'
import { signalsByName, signalsByNumber } from 'human-signals'
import { each } from 'test-each'

const ajv = new Ajv({})

const validate = function (value, schema) {
  const isValid = ajv.validate(schema, value)

  if (isValid) {
    return true
  }

  return ajv.errorsText(ajv.errors, { separator: '\n' })
}

const JSON_SCHEMA = {
  type: 'object',
  minProperties: 1,
  additionalProperties: {
    type: 'object',
    properties: {
      name: { type: 'string', pattern: 'SIG[A-Z\\d]+' },
      number: { type: 'integer', minimum: 1, maximum: 64 },
      description: { type: 'string', minLength: 1 },
      supported: { type: 'boolean' },
      action: {
        type: 'string',
        enum: ['terminate', 'core', 'ignore', 'pause', 'unpause'],
      },
      forced: { type: 'boolean' },
      standard: {
        type: 'string',
        enum: ['ansi', 'posix', 'bsd', 'systemv', 'other'],
      },
    },
    additionalProperties: false,
  },
}

each(
  [
    { title: 'signalsByName', signals: signalsByName },
    { title: 'signalsByNumber', signals: signalsByNumber },
  ],
  ({ title }, { signals }) => {
    test(`Shape | ${title}`, (t) => {
      t.is(validate(signals, JSON_SCHEMA), true)
    })
  },
)

test('Object keys | signalsByName', (t) => {
  t.true(Object.entries(signalsByName).every(([key, { name }]) => key === name))
})

test('Object keys | signalsByNumber', (t) => {
  t.true(
    Object.entries(signalsByNumber).every(
      ([key, { number }]) => key === String(number),
    ),
  )
})

test('Same signals', (t) => {
  t.true(
    Object.values(signalsByNumber).every((signal) =>
      isDeepStrictEqual(signal, signalsByName[signal.name]),
    ),
  )
})
