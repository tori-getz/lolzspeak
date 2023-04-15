import * as yaml from 'js-yaml';
import * as fs from 'fs-extra';
import * as path from 'node:path';
import * as appRoot from 'app-root-path';

const CONFIG_PATH = path.resolve(appRoot.path, 'configs', 'config.yaml');

export const getYamlConfiguration = () => {
  console.log(CONFIG_PATH);
  return yaml.load(
    fs.readFileSync(CONFIG_PATH, 'utf8')
  ) as Record<string, any>;
};
