import type { Checker } from './Checker'
import type { Tag } from './Tag'

declare global {
  interface Window {
    checker: Checker
  }
}
/**
 * An interface that allows various properties for gateways to be checked
 */
export interface Checkable {

  // @todo: Update to async/await
  // check: () => Promise<void>
  check: () => void
  checked: () => void
  onerror: () => void
}

/**
 * A class implementing the Visible interface supports functionality that can make it visible in the UI
 */
export interface Visible {
  tag: Tag
  _tagName: string
  _className: string
}

export interface DnsQueryResponseAnswer { name: string, type: number, TTL: number, data: string }
export interface DnsQueryResponseQuestion { name: string, type: number }

export interface DnsQueryResponseAuthority {
  TTL: number
  data: string // "aragorn.ns.cloudflare.com. dns.cloudflare.com. 2271826322 10000 2400 604800 3600"
  name: string // "stibarc.com"
  type: number
}

export interface DnsQueryResponse {
  AD: boolean
  Answer?: DnsQueryResponseAnswer[]
  Authority?: DnsQueryResponseAuthority[]
  CD: boolean
  Question: DnsQueryResponseQuestion[]
  RA: boolean
  RD: boolean
  Status: number
  TC: boolean
}
