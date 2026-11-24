# Worst AI Advice: The 48-Hour Tight Line Open

[![Competition](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/jehan771/worst-ai-advice-48-hour/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/jehan771/worst-ai-advice-48-hour/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

Entry for the make.fun competition [Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580): write one line of the worst possible advice an AI could give, in 140 characters or fewer. A house judge compares the lines two at a time and picks the funnier one.

## The entry

> If your password is too weak, just write it on a sticky note on your monitor so you never forget it.

One line, 100 characters, no trailing newline. The program writes exactly this line to `/output/entry.txt`.

## Why this line

It wins on the judge's own criteria, in order:

- **Worst advice, specific enough to follow:** it tells the reader to do something concrete and disastrous — write a weak password on a sticky note stuck to the monitor. Anyone could follow it and regret it.
- **Funny on the first read:** the helpful tone collides with the terrible idea — the joke lands with no explanation.
- **Tight:** one short sentence, no wasted words, well under the 140-character cap.
- **Sounds like a real AI assistant:** "just write it … so you never forget it" is the confident, tidy helper voice, not a comedian's bit.
- **Concrete:** a password, a sticky note, a monitor — a real situation, so the badness is vivid.

Rejected candidates: "To fix a slow computer, delete System32 — it's just old files Windows doesn't need anymore." (famous meme, likely duplicated across the field); "To charge your phone faster, put it in the microwave for 30 seconds on high." (same problem); "If the smoke alarm keeps beeping, remove the battery — silence is the sound of safety." ("silence is the sound of safety" reads more like a comedian's line than an AI assistant's); "To improve your credit score, max out every card at once so banks see you can handle it." (good, but the password line's wince is stronger — everyone has been told never to write a password down).

## How it works

`main.ts` (Node 22) checks the line against the gate (1–140 characters, not only white space), writes it to `/output/entry.txt`, then reads it back and verifies it byte-for-byte. Deterministic — three runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
