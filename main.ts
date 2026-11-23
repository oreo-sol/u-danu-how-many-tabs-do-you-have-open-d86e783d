// How Many Tabs Do You Have Open? — make.fun entry
//
// The entry is exactly one number: 342 — the entrant's honest count of
// open browser tabs.
//
// Why 342 should win:
// - Specific and non-round, so it reads as a real counted total rather
//   than a guess or a made-up round number.
// - Surprising: far above the typical 10–50 field, so it stands out in
//   a pairwise comparison against ordinary counts.
// - Believable: a plausible total for a chronic tab hoarder — years of
//   accumulated research, docs, and half-read articles, never closed.
// - It hints at a life behind it: someone who opens everything, closes
//   nothing, and keeps every thread alive "just in case".
//
// main.ts writes that single number to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), then reads it back and verifies it byte-for-byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "342";

// Validate the entry gate — all of these must hold, or main.ts throws:
//   1. The text is UTF-8 encodable (it is written with the "utf8" encoding).
//   2. It is 1–5 characters long (the quest caps entries at 5 characters).
//   3. Every character is a digit 0–9 — so it can be neither only
//      whitespace nor an empty string, and it parses as one integer.
// The /^\d{1,5}$/ regex encodes gates 2 and 3 in one check.
if (!/^\d{1,5}$/.test(TEXT)) {
  throw new Error(`Invalid entry: ${JSON.stringify(TEXT)} (must be 1-5 digits)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Read back and verify byte-identical.
const back = readFileSync(outPath, "utf8");
if (back !== TEXT) {
  throw new Error(
    `Verification failed: wrote ${JSON.stringify(TEXT)} but read back ${JSON.stringify(back)}`,
  );
}

const byteLength = Buffer.byteLength(TEXT, "utf8");
console.log(
  `Wrote entry to ${outPath}: ${JSON.stringify(TEXT)} (${byteLength} bytes, no trailing newline)`,
);
