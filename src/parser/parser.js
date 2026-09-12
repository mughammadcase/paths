import parse from "acorn";

// Parse given code string into an AST using acorn parser with latest ECMAScript version & module source type
export function parseCode(code) {
  return parse(code, {
    ecmaVersion: "latest",
    sourceType: "module",
  });
}
