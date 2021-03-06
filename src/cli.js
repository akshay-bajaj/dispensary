import path from 'path';

import argv from 'yargs';

// eslint-disable-next-line import/extensions
import { version } from '../package.json';

export default argv
  .usage(`${'Usage: ./$0 [options] \n\n Mozilla Dispensary v'}${version}`)
  .option('log-level', {
    describe: 'The log-level to generate',
    type: 'string',
    default: 'fatal',
    choices: ['fatal', 'error', 'warn', 'info', 'debug', 'trace'],
  })
  .option('max', {
    describe: 'Maximum number of concurrent HTTP requests',
    type: 'string',
    default: '35',
  })
  .option('stack', {
    describe: 'Show stacktraces when errors are thrown',
    type: 'boolean',
    default: false,
  })
  .option('boring', {
    describe: 'Disables colorful shell output',
    type: 'boolean',
    default: false,
  })
  .option('libraries', {
    describe: 'Custom library file',
    type: 'string',
    default: global.appRoot
      ? path.join(global.appRoot, '../src/libraries.json')
      : './src/libraries.json',
  })
  .demand(0)
  .help('help')
  .alias('h', 'help');
