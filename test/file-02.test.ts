import {test, expect} from 'vitest'

import {bundleSome, busy} from './_template.js'

test('02: bundle with esbuild', async () => {
  await bundleSome('02')
  await new Promise((r) => setTimeout(r, 1000))
  expect(true).toBe(true)
}, 60000)

test('02: synchronous busy work', async () => {
  const n = await busy(2000)
  expect(typeof n).toBe('number')
}, 30000)
