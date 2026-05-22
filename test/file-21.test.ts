import {test, expect} from 'vitest'

test('21-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(21 + 21).toBe(21 * 2)
})

test('21-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
