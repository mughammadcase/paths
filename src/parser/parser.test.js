import { describe, it, expect } from "vitest";
import { parseSource } from "./parser.js";

describe("parseSource", () => {
  it("parses valid JavaScript code into an AST", () => {
    const ast = parseSource("const name = 'Mughammad';");

    expect(ast.type).toBe("Program");
    expect(ast.sourceType).toBe("module");
    expect(ast.body).toHaveLength(1);
  });
});
