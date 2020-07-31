import {
  cosmiconfig,
  cosmiconfigSync,
  Options,
  OptionsSync,
} from "cosmiconfig";
import { config } from "dotenv";
import camel from "lodash.camelcase";
import { CosmiconfigResult } from "cosmiconfig/dist/types";
config();

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

const _getCosmicResult = (
  result: CosmiconfigResult
): { [index: string]: any } => {
  const env = { ...process.env };
  for (const key in env) {
    env[camel(key)] = env[key];
    delete env[key];
  }
  return { ...result?.config, ...env };
};

export const cosmic = async (name: string, options?: Options) => {
  const { search } = cosmiconfig(name, {
    searchPlaces: defaultSearchPlaces(name),
    ...options,
  });
  return _getCosmicResult(await search());
};

export const cosmicSync = (name: string, options?: OptionsSync) => {
  const { search } = cosmiconfigSync(name, {
    searchPlaces: defaultSearchPlaces(name),
    ...options,
  });
  return _getCosmicResult(search());
};
