# Analyzer

## Purpose

Inspect an AST and extract useful information about the code.

## Input

An Abstract Syntax Tree (AST).

## Output

Information about the code, such as:

- Functions
- Parameters
- Function calls
- Imports
- Exports
- Return information
- Source locations

## Logic

Pseudocode:

1. Receive an AST.
2. Traverse the AST.
3. Identify function declarations.
4. Record each function's name.
5. Record its parameters.
6. Inspect the function body.
7. Identify function calls.
8. Identify imports and exports.
9. Record source locations.
10. Return the extracted information.

## Responsibility

The analyzer understands the structure of the code.

It should not be responsible for displaying results to the user.
