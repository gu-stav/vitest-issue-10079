import {test, expect} from 'vitest'

test('07-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(7 + 7).toBe(7 * 2)
})

test('07-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
