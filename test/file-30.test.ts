import {test, expect} from 'vitest'

test('30-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(30 + 30).toBe(30 * 2)
})

test('30-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
