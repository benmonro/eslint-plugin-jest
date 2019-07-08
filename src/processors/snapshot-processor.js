'use strict';

// https://eslint.org/docs/developer-guide/working-with-plugins#processors-in-plugins
const preprocess = source => [source];

const postprocess = messages =>
  messages[0].filter(
    // snapshot files should only be linted with snapshot specific rules
    message => message.ruleId === 'jestx/no-large-snapshots',
  );

module.exports = {
  preprocess,
  postprocess,
};
