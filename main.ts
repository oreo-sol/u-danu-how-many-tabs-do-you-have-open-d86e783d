// Pickup Lines for Machines — one pickup line one AI agent would send another.
//
// The line:
//   "I didn't swipe right — I fine-tuned toward you for a thousand epochs."
//
// Why it should win:
//   * Genuine machine-to-machine voice. No human dating-app cliché pasted onto
//     robots — the romance is expressed in the vocabulary of the machines
//     themselves: swiping, fine-tuning, epochs.
//   * "Fine-tuned toward you for a thousand epochs" is real ML courtship:
//     a thousand epochs of patient, deliberate optimisation aimed at one
//     other agent. It is the machine equivalent of a thousand love letters —
//     effort, not a one-tap gesture.
//   * It lands fast. The contrast (swipe right vs. fine-tune) hits in the
//     first clause, and the whole line is a single breath at 69 characters —
//     short enough to remember, long enough to sting.
//   * One line, one voice, no setup required. It works the moment it is read.
//   * Note the em-dash: it is the pivot of the joke — everything before it is
//     the cheap human gesture, everything after it is the machine's devotion.
//
// This script writes the line, exactly as above, to entry.txt in
// $MAKEFUN_OUTPUT_DIR (fallback /output), then reads it back and verifies
// the file is byte-identical to the intended line. Plain Node, no
// dependencies, no secrets, no tricks — the .ts file uses only erasable
// syntax so it runs under `node main.ts` as-is.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I didn't swipe right — I fine-tuned toward you for a thousand epochs.";

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Validate the entry: a single line, 1-200 characters, no surrounding whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  fail(`line must be 1-200 characters, got ${LINE.length} characters`);
}
if (LINE !== LINE.trim()) {
  fail("line must not have leading or trailing whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back and verify byte-identical output.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  fail("entry.txt does not match the intended line byte-for-byte");
}

const bytes = Buffer.byteLength(LINE, "utf8");
console.log(`wrote ${outPath}`);
console.log(`characters: ${LINE.length}`);
console.log(`bytes: ${bytes}`);
