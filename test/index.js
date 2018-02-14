'use strict'

const test = require('ava')

const isTrackingDomain = require('..')

test('tracking list is generated', t => {
  t.is(isTrackingDomain('doubleclick.net'), true)
})
