import {test, expect} from 'vitest'

import {bundleSome, busy} from './_template.js'

test('07: bundle with esbuild', async () => {
  await bundleSome('07')
  await new Promise((r) => setTimeout(r, 3500))
  expect(true).toBe(true)
}, 60000)

test('07: synchronous busy work', async () => {
  const n = await busy(2000)
  expect(typeof n).toBe('number')
}, 30000)
