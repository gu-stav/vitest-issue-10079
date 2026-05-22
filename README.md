# vitest-issue-10079

Minimal reproduction for vitest worker shutdown race on Windows.

The bug was originally reported in [vitest-dev/vitest#10079](https://github.com/vitest-dev/vitest/issues/10079) (now closed and locked). The fix attempt in [#10057](https://github.com/vitest-dev/vitest/pull/10057) was closed without merging because the author couldn't produce a clean reproduction. This repo provides one.

## What it does

- 2 trivial passing tests across 2 files
- Default vitest config, `pool: 'forks'`
- CI workflow runs `vitest run` 30 times per OS/Node combination, fails on the first iteration that crashes

## Result

On `windows-latest`, some iterations fail with:

```
Error: [vitest-pool]: Worker forks emitted error.
Caused by: Error: Worker exited unexpectedly
```

Even though all tests pass. The crash is in pool shutdown, not in test code.

On `ubuntu-latest`, all 30 iterations pass.

## Running locally

```sh
npm install
npm test
```
