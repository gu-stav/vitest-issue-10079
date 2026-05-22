import {test, expect} from 'vitest'

import {bundleSome, busy} from './_template.js'

test('13: bundle with esbuild', async () => {
  await bundleSome('13')
  await new Promise((r) => setTimeout(r, 6500))
  expect(true).toBe(true)
}, 60000)

test('13: synchronous busy work', async () => {
  const n = await busy(2000)
  expect(typeof n).toBe('number')
}, 30000)
