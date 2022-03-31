import { Checker } from './Checker'
import gateways from './gateways.json'

import { Log } from './Log'

const log = new Log('App index')

window.checker = new Checker()

window.checker.checkGateways(gateways).catch((err) => {
  log.error('Unexpected error')
  log.error(err)
})
