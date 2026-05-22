import {test, expect} from 'vitest'

import {bundleSome, busy} from './_template.js'

test('09: bundle with esbuild', async () => {
  await bundleSome('09')
  await new Promise((r) => setTimeout(r, 4500))
  expect(true).toBe(true)
}, 60000)

test('09: synchronous busy work', async () => {
  const n = await busy(2000)
  expect(typeof n).toBe('number')
}, 30000)
