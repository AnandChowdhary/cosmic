import {
  cosmiconfig,
  cosmiconfigSync,
  Options,
  OptionsSync,
} from "cosmiconfig";
import { config } from "dotenv";
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

export class Cosmic {
  search: (searchFrom?: string) => Promise<CosmiconfigResult>;
  load: (filepath: string) => Promise<CosmiconfigResult>;
  clearLoadCache: () => void;
  clearSearchCache: () => void;
  clearCaches: () => void;
  searchSync: (searchFrom?: string) => CosmiconfigResult;
  loadSync: (filepath: string) => CosmiconfigResult;
  clearLoadCacheSync: () => void;
  clearSearchCacheSync: () => void;
  clearCachesSync: () => void;
  constructor(name: string, options?: Options | OptionsSync) {
    const cosmiconfigSyncResult = cosmiconfigSync(name, {
      searchPlaces: defaultSearchPlaces(name),
      ...options,
    } as OptionsSync);
    this.searchSync = cosmiconfigSyncResult.search;
    this.loadSync = cosmiconfigSyncResult.load;
    this.clearLoadCacheSync = cosmiconfigSyncResult.clearLoadCache;
    this.clearSearchCacheSync = cosmiconfigSyncResult.clearSearchCache;
    this.clearCachesSync = cosmiconfigSyncResult.clearCaches;

    const cosmiconfigResult = cosmiconfig(name, {
      searchPlaces: defaultSearchPlaces(name),
      ...options,
    } as Options);
    this.search = cosmiconfigResult.search;
    this.load = cosmiconfigResult.load;
    this.clearLoadCache = cosmiconfigResult.clearLoadCache;
    this.clearSearchCache = cosmiconfigResult.clearSearchCache;
    this.clearCaches = cosmiconfigResult.clearCaches;
  }
}
