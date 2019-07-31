#!/usr/bin/env node

'use strict';

const urllib = require('urllib');

const {
  WEBHOOK_URL,
} = process.env;

console.log(WEBHOOK_URL);

async function run() {
  const text = [
    '## [xxxx提示](https://github.com)',
    '---',
    '### 标题标题标题标题标题标题标题',
    '',
    '摘要：描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描',
    '',
    '![](https://avatars1.githubusercontent.com/u/9950313)',
    '---',
    '![](https://avatars1.githubusercontent.com/u/9950313)',
  ].join('\n');

  const dingtalkMessage = {
    msgtype: 'markdown',
    markdown: {
      title: 'title',
      text,
    },
  };
  console.log(dingtalkMessage);
  await urllib.request(WEBHOOK_URL, {
    method: 'POST',
    data: dingtalkMessage,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

run().then();
