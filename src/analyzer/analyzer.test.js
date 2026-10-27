import { describe, it, expect } from "vitest";
import { analyzeSource } from "./analyzer.js";
import { parseSource } from "../parser/parser.js";

describe("analyzeSource", () => {
  // the analyzer should extract the names of top level functions
  it("extracts function declarations, parameters and calls", () => {
    const source = `
    function login(email, password) {
    validateUser(email, password);
    authenticateUser(email, password);
    }
    function validateUser(email, password) {}
    function authenticateUser(email, password) {}
    `;

    const ast = parseSource(source);
    const functions = analyzeSource(ast);

    expect(functions).toEqual([
      {
        name: "login",
        parameters: ["email", "password"],
        calls: ["validateUser", "authenticateUser"],
      },
      {
        name: "validateUser",
        parameters: ["email", "password"],
        calls: [],
      },
      {
        name: "authenticateUser",
        parameters: ["email", "password"],
        calls: [],
      },
    ]);
  });
});
