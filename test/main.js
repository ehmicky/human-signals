import test from 'ava'

import { getByName } from '../src/main.js'

test('dummy test', t => {
  t.true(typeof getByName === 'function')
})
