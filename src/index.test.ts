import { expect, test } from "bun:test";
import { solonary } from "./index";

test("returns the package name", () => {
  expect(solonary()).toBe("solonary");
});
