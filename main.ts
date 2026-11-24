// SPDX-License-Identifier: MIT
// makefun-worst-app-idea — The Worst App Idea Ever Pitched
// Entry: one sentence, at most 240 characters (exact count filled in below after verification).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Plantside is a premium app that live-streams your houseplants' silent disappointment and charges $9.99 a month to translate their drooping leaves into passive-aggressive push notifications you cannot mute.";

// Entry character count: 205
if (entry.length < 1 || entry.length > 240) {
  throw new Error(`entry is ${entry.length} characters; gate requires 1-240`);
}
if (!entry.trim()) {
  throw new Error("entry is only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
