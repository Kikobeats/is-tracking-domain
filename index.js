'use strict'

const domains = require('./domains.json')

module.exports = (domain, { exclude = [] } = {}) =>
  !exclude.includes(domain) && domains.includes(domain)

module.exports.domains = domains
