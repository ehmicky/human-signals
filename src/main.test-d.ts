import {
  signalsByName,
  signalsByNumber,
  type Signal,
  type SignalNumber,
  type SignalName,
  type SignalAction,
  type SignalStandard,
} from 'human-signals'
import { expectAssignable, expectNotAssignable, expectType } from 'tsd'

const sigintSignal = signalsByName.SIGINT
expectType<Signal>(sigintSignal)
expectType<SignalName>(sigintSignal.name)
expectType<SignalNumber>(sigintSignal.number)
expectType<string>(sigintSignal.description)
expectType<boolean>(sigintSignal.supported)
expectType<SignalAction>(sigintSignal.action)
expectType<boolean>(sigintSignal.forced)
expectType<SignalStandard>(sigintSignal.standard)

const sigintOne = signalsByNumber[1]
expectType<Signal | undefined>(sigintOne)
expectType<SignalName>(sigintOne!.name)
expectType<SignalNumber>(sigintOne!.number)
expectType<string>(sigintOne!.description)
expectType<boolean>(sigintOne!.supported)
expectType<SignalAction>(sigintOne!.action)
expectType<boolean>(sigintOne!.forced)
expectType<SignalStandard>(sigintOne!.standard)

expectAssignable<SignalName>('SIGINT')
expectAssignable<SignalName>('SIGRT1')
expectAssignable<SignalName>('SIGRT31')
expectNotAssignable<SignalName>(true)
expectNotAssignable<SignalName>('INT')
expectNotAssignable<SignalName>('sigint')
expectNotAssignable<SignalName>('Sigint')
expectNotAssignable<SignalName>('SIGUNKNOWN')
expectNotAssignable<SignalName>('SIGRT0')
expectNotAssignable<SignalName>('SIGRT32')

expectAssignable<SignalNumber>(1)
expectNotAssignable<SignalNumber>('1')

expectAssignable<SignalAction>('terminate')
expectAssignable<SignalAction>('core')
expectAssignable<SignalAction>('ignore')
expectAssignable<SignalAction>('pause')
expectAssignable<SignalAction>('unpause')
expectNotAssignable<SignalAction>(true)
expectNotAssignable<SignalAction>('unknown')

expectAssignable<SignalStandard>('ansi')
expectAssignable<SignalStandard>('posix')
expectAssignable<SignalStandard>('bsd')
expectAssignable<SignalStandard>('systemv')
expectAssignable<SignalStandard>('other')
expectNotAssignable<SignalStandard>(true)
expectNotAssignable<SignalStandard>('unknown')
