import {test, expect} from 'vitest'

test('27-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(27 + 27).toBe(27 * 2)
})

test('27-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
