[![make.fun · u-danu-how-many-tabs-do-you-have-open-d86e783d](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/oreo-sol/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/oreo-sol/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)

# How Many Tabs Do You Have Open?

Entry for the make.fun bounty: [How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

## The entry

One number: **342** open browser tabs.

Specific and non-round, so it reads as a real counted total. Surprising — far above the usual 10–50 — yet believable for a chronic tab hoarder: years of accumulated research, docs, and half-read articles, never closed. It hints at a life of opening everything and closing nothing.

## How it works

`main.ts` (Node, no dependencies) validates the entry — 1–5 characters, digits only — writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads it back and verifies it byte-for-byte, throwing on any mismatch.

## Usage

```sh
node main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` is written.

## License

MIT — see [LICENSE](LICENSE).
