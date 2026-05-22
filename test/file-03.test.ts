import {test, expect} from 'vitest'

import {bundleSome, busy} from './_template.js'

test('03: bundle with esbuild', async () => {
  await bundleSome('03')
  await new Promise((r) => setTimeout(r, 1500))
  expect(true).toBe(true)
}, 60000)

test('03: synchronous busy work', async () => {
  const n = await busy(2000)
  expect(typeof n).toBe('number')
}, 30000)
