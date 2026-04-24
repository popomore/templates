import { describe, it, expect } from "vitest";
import { hello } from "../src/index";

describe("hello", () => {
  it("should return greeting with default name", () => {
    expect(hello()).toBe("Hello, world!");
  });

  it("should return greeting with custom name", () => {
    expect(hello("test")).toBe("Hello, test!");
  });
});
