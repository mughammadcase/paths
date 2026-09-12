# Graph

## Purpose

Represent relationships between pieces of code.

The graph will eventually allow "Paths" to answer questions such as:

- Who calls this function?
- What does this function call?
- What code depends on this function?
- What path leads to this function?

## Input

Code relationships produced by the analyzer.

## Output

A graph representing relationships between code elements.

## Logic

Pseudocode:

1. Receive analyzed code information.
2. Create a node for each relevant code element.
3. Create relationships between related nodes.
4. Represent function calls as connections.
5. Represent dependencies as connections.
6. Store the resulting graph.
7. Allow the graph to be traversed forwards or backwards.

## Responsibility

The graph represents relationships.

It should not parse source code or handle command-line input.
