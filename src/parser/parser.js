import { parse } from "acorn";

// Parse source code into an AST using the latest ECMAScript version.
export function parseSource(source) {
  return parse(source, {
    ecmaVersion: "latest",
    sourceType: "module",
  });
}
