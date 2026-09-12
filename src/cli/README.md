# CLI

## Purpose

Provide the command-line interface developers use to interact with "Paths".

## Input

Commands and options supplied by the developer.

Example:

paths analyze src/auth.js --function login

## Output

Human-readable analysis results.

## Logic

Pseudocode:

1. Receive command-line arguments.
2. Determine the requested command.
3. Validate the provided arguments.
4. Pass the request to the appropriate application module.
5. Receive the analysis result.
6. Format the result.
7. Display it to the developer.
8. Report errors clearly when something goes wrong.

## Responsibility

The CLI handles communication with the developer.

It should not contain the actual code-analysis logic.
