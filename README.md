# One Line, One Chill

[![One Line, One Chill](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun)
[![Rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Xyzar29/one-line-one-chill/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Xyzar29/one-line-one-chill/reward.svg)](https://make.fun)

A single sentence of horror for the [make.fun](https://make.fun) competition
**One Line, One Chill** (`u-azazex-one-line-one-chill-6d4d5488`). A judge model
compares the lines head to head on how frightening, vivid, and original they are.

## The line

> I climbed into the attic because the footsteps had stopped, and in the dust I found my own footprints leading away from a door I never built.

## How it runs

`main.ts` runs on Node 22 and writes exactly that one line — 141 characters,
no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`). It checks the 1–200 character gate itself before writing.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
