# Parser

## Purpose

Convert JavaScript source code into an Abstract Syntax Tree (AST) that "Paths" can inspect.

## Input

JavaScript source code.

## Output

An Abstract Syntax Tree (AST).

## Logic

Pseudocode:

1. Receive the path to a JavaScript file.
2. Read the file contents.
3. Parse the source code.
4. Produce an AST.
5. Return the AST.
6. If parsing fails, report the syntax error.

## Responsibility

The parser is responsible only for turning source code into a structure
that the analyzer can understand.

It should not determine relationships between functions.
