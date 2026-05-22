import {test, expect} from 'vitest'

test('06-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(6 + 6).toBe(6 * 2)
})

test('06-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
