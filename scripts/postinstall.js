'use strict'

const jsonFuture = require('json-future')
const got = require('got')

const DATASET_URL =
  'https://rawgit.com/disconnectme/disconnect-tracking-protection/master/services.json'

/**
 * Extract fields from a domains data collection avoiding other fields
 * @param  {Object} obj The input should be follow an estructure like:
 *
 * {
 * "Adless": {
 *     "https://www.adless.io/": [
 *       "adless.io"
 *     ],
 *     "performance": "true",
 *     "cryptominer": "true"
 *   }
 * }
 *
 */
const extractDomains = obj =>
  Object.values(obj).reduce((domains, value) => {
    if (Array.isArray(value)) return [...domains, ...value]
    if (typeof value === 'object') return [...domains, ...extractDomains(value)]
    return domains
  }, [])
;(async () => {
  const { body } = await got(DATASET_URL)
  const { categories } = await jsonFuture.parseAsync(body)

  const domains = Object.values(categories).reduce((set, category) => {
    const domains = category.reduce(
      (domains, company) => [...domains, ...extractDomains(company)],
      []
    )
    return new Set([...set, ...domains])
  }, new Set())

  // sorted alphabetically is visually better
  const sortedDomains = Array.from(domains).sort()

  await jsonFuture.saveAsync('domains.json', sortedDomains)
})()
