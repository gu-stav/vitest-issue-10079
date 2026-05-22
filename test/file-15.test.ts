import {test, expect} from 'vitest'

import {bundleSome, busy} from './_template.js'

test('15: bundle with esbuild', async () => {
  await bundleSome('15')
  await new Promise((r) => setTimeout(r, 7500))
  expect(true).toBe(true)
}, 60000)

test('15: synchronous busy work', async () => {
  const n = await busy(2000)
  expect(typeof n).toBe('number')
}, 30000)
