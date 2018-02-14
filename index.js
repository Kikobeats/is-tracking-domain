'use strict'

const domains = require('./domains.json')

module.exports = domain => domains.includes(domain)
module.exports.domains = domains
