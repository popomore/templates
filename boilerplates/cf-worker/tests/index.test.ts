import { describe, it, expect } from "vitest";
import app from "../src/index";

describe("app", () => {
  it("should return hello", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello, World!");
  });

  it("should return health ok", async () => {
    const res = await app.request("/health");
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok" });
  });
});
