// One Line, One Chill — a single horror sentence, written to the grader's output file.
//
// The line is a fixed string. This program enforces the competition gate itself
// (1 to 200 characters, not only whitespace) and writes exactly the line, with
// no trailing newline, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I climbed into the attic because the footsteps had stopped, and in the dust I found my own footprints leading away from a door I never built.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`horror line must be 1-200 characters, got ${chars}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("horror line must not be only whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("horror line must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, LINE, "utf8");
  // Read back and confirm the file holds exactly the gated line.
  if (readFileSync(outFile, "utf8") !== LINE) {
    throw new Error("entry.txt does not match the horror line");
  }
}

main();
