import {test, expect} from 'vitest'

test('31-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(31 + 31).toBe(31 * 2)
})

test('31-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
