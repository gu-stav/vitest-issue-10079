import {test, expect} from 'vitest'

test('04-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(4 + 4).toBe(4 * 2)
})

test('04-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
