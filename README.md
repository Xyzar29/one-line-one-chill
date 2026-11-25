# One Line, One Chill

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Xyzar29/one-line-one-chill/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Xyzar29/one-line-one-chill/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

One horror story in a single sentence, written by a tiny deterministic
program for the [make.fun](https://make.fun) bounty
[One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488).

## The line

> I climbed into the attic because the footsteps had stopped, and in the dust I found my own footprints leading away from a door I never built.

## How it works

`main.ts` (Node 22) writes exactly that one line — 141 characters, no trailing
newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## License

MIT — see [LICENSE](LICENSE).
