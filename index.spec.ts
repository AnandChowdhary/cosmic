import { cosmic, cosmicSync, clearCosmicCache, config } from "./index";

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

describe("clear", () => {
  it("has env sync", () => {
    // clearCosmicCache();
    process.env.example_test = "example";
    const data = cosmicSync("cosmic");
    console.log(data);
    expect(config("example_test")).toBe("example");
  });
});
