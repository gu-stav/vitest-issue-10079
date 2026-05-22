import {test, expect} from 'vitest'

test('16-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(16 + 16).toBe(16 * 2)
})

test('16-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
