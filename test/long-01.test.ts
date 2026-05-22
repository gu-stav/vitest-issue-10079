import {test, expect} from 'vitest'

async function busy(ms: number): Promise<number> {
  const start = Date.now()
  let n = 0
  while (Date.now() - start < ms) {
    n = (n + Math.random()) % 1
    await new Promise((r) => setImmediate(r))
  }
  return n
}

test('long-1', async () => {
  await busy(12000)
  expect(true).toBe(true)
}, 60000)

test('long-2', async () => {
  await busy(12000)
  expect(true).toBe(true)
}, 60000)
