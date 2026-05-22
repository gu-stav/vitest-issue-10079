import {test, expect} from 'vitest'

test('32-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(32 + 32).toBe(32 * 2)
})

test('32-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
