import { cosmic } from "./index";

describe("empty", () => {
  it("works", async () => {
    const config = await cosmic("cosmic");
    console.log(config);
    expect(1).toBe(1);
  });
});
