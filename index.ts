import {
  cosmiconfig,
  cosmiconfigSync,
  Options,
  OptionsSync,
} from "cosmiconfig";
import { config as dotenvConfig } from "dotenv";
import camel from "lodash.camelcase";
import { CosmiconfigResult } from "cosmiconfig/dist/types";
dotenvConfig();

export interface CosmicResult {
  [index: string]: any;
}

const defaultSearchPlaces = (name: string) => [
  "package.json",
  `.${name}rc`,
  `.${name}rc.json`,
  `.${name}rc.yaml`,
  `.${name}rc.yml`,
  `.${name}rc.js`,
  `.${name}`,
  `.${name}.json`,
  `.${name}.yaml`,
  `.${name}.yml`,
  `.${name}.js`,
  `${name}.config.js`,
];

const _getCosmicResult = (result: CosmiconfigResult): CosmicResult => {
  const env = { ...process.env };
  for (const key in env) {
    env[camel(key)] = env[key];
    delete env[key];
  }
  return { ...(result || {}).config, ...env };
};

let cachedConfig: CosmicResult | undefined = undefined;
export const cosmic = async (name: string, options?: Options) => {
  const { search } = cosmiconfig(name, {
    searchPlaces: defaultSearchPlaces(name),
    ...options,
  });
  if (!cachedConfig) cachedConfig = _getCosmicResult(await search());
  return cachedConfig;
};

let cachedConfigSync: CosmicResult | undefined = undefined;
export const cosmicSync = (name: string, options?: OptionsSync) => {
  const { search } = cosmiconfigSync(name, {
    searchPlaces: defaultSearchPlaces(name),
    ...options,
  });
  if (!cachedConfigSync) cachedConfigSync = _getCosmicResult(search());
  return cachedConfigSync;
};

export const clearCosmicCache = () => {
  dotenvConfig();
  cachedConfig = undefined;
  cachedConfigSync = undefined;
};

export const config = <T: any>(key: string) => {
  if (cachedConfig && cachedConfig[key]) return cachedConfig[key] as T;
  if (cachedConfigSync && cachedConfigSync[key]) return cachedConfigSync[key] as T;
};
