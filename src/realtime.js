// List of realtime signals with information about them
export const getRealtimeSignals = function() {
  const length = SIGRTMAX - SIGRTMIN + 1
  return Array.from({ length }, getRealtimeSignal)
}

const getRealtimeSignal = function(value, index) {
  return {
    name: `SIGRT${index + 1}`,
    number: SIGRTMIN + index,
    action: 'terminate',
    description: 'Application-specific signal (realtime)',
    source: 'posix',
  }
}

const SIGRTMIN = 34
export const SIGRTMAX = 64
