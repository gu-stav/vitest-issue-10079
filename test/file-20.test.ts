import {test, expect} from 'vitest'

test('20-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(20 + 20).toBe(20 * 2)
})

test('20-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
