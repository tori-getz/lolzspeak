import * as path from 'node:path';
import * as appRoot from 'app-root-path';
import { ServeStaticModuleOptions } from '@nestjs/serve-static';

const SERVE_PATH = path.resolve(appRoot.path, 'configs', 'static');

export const getServeStaticConfig = (): ServeStaticModuleOptions => {
  return {
    rootPath: SERVE_PATH,
  };
};
