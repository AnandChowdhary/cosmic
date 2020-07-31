import { cosmic, cosmicSync, config, clearCosmicCache } from "./index";
import fs from "fs";

beforeAll(async () => {
  await fs.promises.writeFile(".cosmicrc", JSON.stringify({ rcValue: "test" }));
});
afterAll(async () => {
  await fs.promises.unlink(".cosmicrc");
});

describe("environment variables", () => {
  it("has env async", async () => {
    const data = await cosmic("cosmic");
    expect(data.nodeEnv).toBe("test");
  });
  it("has env sync", () => {
    const data = cosmicSync("cosmic");
    expect(data.nodeEnv).toBe("test");
  });
});

describe("get config from helper", () => {
  it("has env async", async () => {
    await cosmic("cosmic");
    expect(config("nodeEnv")).toBe("test");
  });
  it("has env sync", () => {
    cosmicSync("cosmic");
    expect(config("nodeEnv")).toBe("test");
  });
});

describe("clear cosmic cache", () => {
  it("has env async", async () => {
    await cosmic("cosmic");
    expect(config("nodeEnv")).toBe("test");
    clearCosmicCache();
    expect(config("nodeEnv")).toBeUndefined();
  });
  it("has env sync", () => {
    cosmicSync("cosmic");
    expect(config("nodeEnv")).toBe("test");
    clearCosmicCache();
    expect(config("nodeEnv")).toBeUndefined();
  });
});

describe("get config from an .rc file", () => {
  it("has env async", async () => {
    await cosmic("cosmic");
    expect(config("rcValue")).toBe("test");
  });
  it("has env sync", () => {
    cosmicSync("cosmic");
    expect(config("rcValue")).toBe("test");
  });
});
