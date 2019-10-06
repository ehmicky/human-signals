import { constants } from 'os'

import { SIGNALS } from './core.js'
import { getRealtimeSignals } from './realtime.js'

// Retrieve list of know signals (including realtime) with information about
// them
export const getSignals = function() {
  const realtimeSignals = getRealtimeSignals()
  const signals = [...SIGNALS, ...realtimeSignals].map(normalizeSignal)
  return signals
}

// Signal numbers are OS-specific. This is taken into account by
// `os.constants.signals`. However we provide a default `number` since some
// signals are not defined for some OS.
// This also sets default `priority` to `false`
const normalizeSignal = function({
  name,
  number,
  description,
  action,
  priority = false,
  source,
}) {
  const {
    signals: { [name]: numberA = number },
  } = constants
  return { name, number: numberA, description, action, priority, source }
}
