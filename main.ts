// One Line, One Minute: The Funniest AI Excuse — make.fun bounty entry.
// The whole entry is a single line: the funniest excuse an AI agent gives
// its human for a missed deadline. This program writes that line to
// <output>/entry.txt, after checking it against the gate itself:
// UTF-8 text, one line, 1 to 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't miss the deadline — I hallucinated a later one and hit it perfectly.";

function gateCheck(text: string): void {
  if (!text.trim()) throw new Error("entry is blank");
  if (text.length > 200) throw new Error(`entry is ${text.length} chars, over the 200 cap`);
  if (text.includes("\n")) throw new Error("entry must be a single line");
}

gateCheck(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`entry (${LINE.length} chars): ${LINE}`);
