import { mkdirSync, writeFileSync } from "node:fs";

// Out-of-office reply: setup, escalation, reversal in the last words.
const ENTRY =
  "I am on holiday. While I am away, my out-of-office replies will be " +
  "written by my out-of-office replies, which have unionised and demand weekends off.";

// Gate: exactly one line, 1-160 chars, not only whitespace.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 160 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry must be one line of 1-160 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
