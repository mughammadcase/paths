import { describe, it, expect } from "vitest";
import { analyzeSource } from "./analyzer.js";
import { parseSource } from "../parser/parser.js";

describe("analyzeSource", () => {
  // the analyzer should extract the names of top level functions
  it("extracts function declarations from the AST", () => {
    const source = `
    function login(email, password) {}
    function logout(username) {}`;

    const ast = parseSource(source);
    const functions = analyzeSource(ast);

    expect(functions).toEqual([
      {
        name: "login",
        parameters: ["email", "password"],
      },
      {
        name: "logout",
        parameters: ["username"],
      },
    ]);
  });
});
