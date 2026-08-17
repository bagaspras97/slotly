import { describe, expect, it } from "vitest";
import { packageName } from "./index";

describe("shared package", () => {
  it("has the expected package name", () => {
    expect(packageName).toBe("@slotly/shared");
  });
});