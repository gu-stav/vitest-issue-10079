// Shared helpers for the reproduction test files.
import {build} from 'esbuild'
import {writeFile} from 'node:fs/promises'
import {tmpdir} from 'node:os'
import {join} from 'node:path'

export async function bundleSome(tag: string): Promise<void> {
  const tmp = join(tmpdir(), `repro-${tag}-${Date.now()}-${Math.random().toString(36).slice(2)}`)
  const entry = `${tmp}.ts`
  const outfile = `${tmp}.js`
  await writeFile(
    entry,
    `
    export async function work() {
      const arr = Array.from({length: 50000}, (_, n) => n)
      return arr.reduce((a, b) => a + b, 0)
    }
    work()
  `,
  )
  await build({
    entryPoints: [entry],
    bundle: true,
    outfile,
    platform: 'node',
    format: 'esm',
    logLevel: 'silent',
  })
}

export async function busy(ms: number): Promise<number> {
  let n = 0
  const end = Date.now() + ms
  while (Date.now() < end) {
    n = (n + Math.random()) % 1
  }
  return n
}
