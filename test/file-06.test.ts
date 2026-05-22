import {test, expect} from 'vitest'

import {bundleSome, busy} from './_template.js'

test('06: bundle with esbuild', async () => {
  await bundleSome('06')
  await new Promise((r) => setTimeout(r, 3000))
  expect(true).toBe(true)
}, 60000)

test('06: synchronous busy work', async () => {
  const n = await busy(2000)
  expect(typeof n).toBe('number')
}, 30000)
