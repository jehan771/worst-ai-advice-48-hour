import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ADVICE =
  "If your password is too weak, just write it on a sticky note on your monitor so you never forget it.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function checkEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

checkEntry(ADVICE);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ADVICE, "utf8");

const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== ADVICE) {
  throw new Error("round-trip check failed: entry.txt differs from the advice line");
}
checkEntry(written);
