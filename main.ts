// Time-machine warning label generator.
// Writes exactly one funny warning-label line to /output/entry.txt.
// Deterministic: the same line every run, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised label: the same duplicate-self hazard, but the punchline is
// sharper — a workplace complaint is more absurd than a tax audit, and
// "against both of you" lands the paradox in the final words.
const LABEL =
  "WARNING: If you meet yourself, do not shake hands. HR has already filed a complaint against both of you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL + "\n", "utf8");
console.log(LABEL);
