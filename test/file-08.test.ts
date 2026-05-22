import {test, expect} from 'vitest'

test('08-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(8 + 8).toBe(8 * 2)
})

test('08-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
