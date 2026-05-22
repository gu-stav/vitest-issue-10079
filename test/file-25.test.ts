import {test, expect} from 'vitest'

test('25-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(25 + 25).toBe(25 * 2)
})

test('25-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
