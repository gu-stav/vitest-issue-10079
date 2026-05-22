import {test, expect} from 'vitest'

test('12-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(12 + 12).toBe(12 * 2)
})

test('12-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
