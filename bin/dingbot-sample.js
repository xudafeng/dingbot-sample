#!/usr/bin/env node

'use strict';

const bot = require('../lib/dingbot-sample');

const { WEBHOOK_URL } = process.env;

console.log(WEBHOOK_URL);

bot({
  webhook: WEBHOOK_URL,
});
