# is-tracking-domain

![Last version](https://img.shields.io/github/tag/Kikobeats/is-tracking-domain.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/is-tracking-domain/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/is-tracking-domain)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/is-tracking-domain.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/is-tracking-domain)
[![Dependency status](https://img.shields.io/david/Kikobeats/is-tracking-domain.svg?style=flat-square)](https://david-dm.org/Kikobeats/is-tracking-domain)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/is-tracking-domain.svg?style=flat-square)](https://david-dm.org/Kikobeats/is-tracking-domain#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/is-tracking-domain.svg?style=flat-square)](https://www.npmjs.org/package/is-tracking-domain)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Determinate if a domain is a tracker. Based on [Tracking Protection by Disconnect](https://github.com/disconnectme/disconnect-tracking-protection).

## Install

```bash
$ npm install is-tracking-domain --save
```

## Usage

```js
const isTrackingDomain = require('is-tracking-domain')

isTrackingDomain('doubleclick.net') // => true
```

## API

### isTrackingDomain(domain, options)

#### domain

*Required*</br>
Type: `string`

The domain to be validated.

#### options

##### exclude

Type: `array`</br>
Default: `[]`

A list of domains to be considered as a whitelist.

## License

**is-tracking-domain** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/is-tracking-domain/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/is-tracking-domain/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [@Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
