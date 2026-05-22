import {test, expect} from 'vitest'

test('11-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(11 + 11).toBe(11 * 2)
})

test('11-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
