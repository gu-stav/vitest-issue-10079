import {test, expect} from 'vitest'

test('10-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(10 + 10).toBe(10 * 2)
})

test('10-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
