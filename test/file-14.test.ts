import {test, expect} from 'vitest'

import {bundleSome, busy} from './_template.js'

test('14: bundle with esbuild', async () => {
  await bundleSome('14')
  await new Promise((r) => setTimeout(r, 7000))
  expect(true).toBe(true)
}, 60000)

test('14: synchronous busy work', async () => {
  const n = await busy(2000)
  expect(typeof n).toBe('number')
}, 30000)
