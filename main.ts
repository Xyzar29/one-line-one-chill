// One Line, One Chill — make.fun bounty u-azazex-one-line-one-chill-6d4d5488
// Writes a single horror line to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I climbed into the attic because the footsteps had stopped, and in the dust I found my own footprints leading away from a door I never built.";

// The bounty gate: entry.txt must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
