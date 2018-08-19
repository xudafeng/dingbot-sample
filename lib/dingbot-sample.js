'use strict';

const ChatBot = require('dingtalk-robot-sender');

module.exports = (options) => {
  const robot = new ChatBot({
    webhook: options.webhook,
  });

  const text = "#### text1\n" +
    "> ![screenshot]()\n"  +
    "> ###### text2 \n";

  robot.markdown('title', text);
};
