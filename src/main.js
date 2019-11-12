import Dispensary from 'dispensary';
import log from 'logger';

// Only include the CLI module if this is being run as a command line script.
// Otherwise we trample over other apps using yargs. See:
// https://github.com/mozilla/addons-linter/issues/735
let cli = { argv: { logLevel: 'fatal' } };
if (require.main === module) {
  // eslint-disable-next-line global-require
  cli = require('cli').default;
}

export function createInstance(config = cli.argv) {
  log.level = config.logLevel;
  log.info('Creating new Dispensary instance', { config });

  return new Dispensary(config);
}

export default Dispensary;
