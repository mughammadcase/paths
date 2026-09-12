import { describe, it, expect } from "vitest";
import { parseSource } from "./parser.js";

describe("parseSource", () => {
  // Valid source should return a complete Program AST.
  it("parses valid JavaScript source into an AST", () => {
    const ast = parseSource("const name = 'Mughammad';");

    expect(ast.type).toBe("Program");
    expect(ast.sourceType).toBe("module");
    expect(ast.body).toHaveLength(1);
  });

  // Invalid source should cause the parser to throw an error.
  it("throws an error for invalid JavaScript source", () => {
    expect(() => parseSource("const name = ;")).toThrow();
  });
});
