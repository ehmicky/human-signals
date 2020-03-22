import { constants } from 'os'

import { SIGNALS } from './core.js'
import { getRealtimeSignals } from './realtime.js'

// Retrieve list of know signals (including realtime) with information about
// them
export const getSignals = function () {
  const realtimeSignals = getRealtimeSignals()
  const signals = [...SIGNALS, ...realtimeSignals].map(normalizeSignal)
  return signals
}

// Normalize signal:
//  - `number`: signal numbers are OS-specific. This is taken into account by
//    `os.constants.signals`. However we provide a default `number` since some
//     signals are not defined for some OS.
//  - `forced`: set default to `false`
//  - `supported`: set value
const normalizeSignal = function ({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard,
}) {
  const {
    signals: { [name]: constantSignal },
  } = constants
  const supported = constantSignal !== undefined
  const number = supported ? constantSignal : defaultNumber
  return { name, number, description, supported, action, forced, standard }
}
