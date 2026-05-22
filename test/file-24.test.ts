import {test, expect} from 'vitest'

test('24-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(24 + 24).toBe(24 * 2)
})

test('24-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
