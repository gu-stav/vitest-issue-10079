import {test, expect} from 'vitest'

test('09-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(9 + 9).toBe(9 * 2)
})

test('09-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
