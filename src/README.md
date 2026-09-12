# Source

This directory contains the core "Paths" application.

## Architecture

"Paths" is separated into focused modules, with each module responsible
for one stage of the analysis process.

```text
Source Code
    ↓
Parser
    ↓
AST
    ↓
Analyzer
    ↓
Code Relationships
    ↓
Graph
    ↓
Execution Paths
    ↓
CLI
```

---
