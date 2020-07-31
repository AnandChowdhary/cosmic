import {
  cosmiconfig,
  cosmiconfigSync,
  Options,
  OptionsSync,
} from "cosmiconfig";
import { config } from "dotenv";
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

export const cosmic = async (name: string, options?: Options) => {
  const { search } = cosmiconfig(name, {
    searchPlaces: defaultSearchPlaces(name),
    ...options,
  });
  let result: any = {};
  try {
    result = await search();
  } catch (error) {}
  const env = { ...process.env };
  return { ...result?.config, ...env };
};

export const cosmicSync = (name: string) => {
  //
};
