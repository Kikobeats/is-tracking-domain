'use strict'

const test = require('ava')

const isTrackingDomain = require('..')

test('tracking list is generated', t => {
  t.is(isTrackingDomain('doubleclick.net'), true)
})

test('exclude support', t => {
  t.is(
    isTrackingDomain('twimg.com', {
      exclude: ['twimg.com']
    }),
    false
  )
})
