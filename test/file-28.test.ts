import {test, expect} from 'vitest'

test('28-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(28 + 28).toBe(28 * 2)
})

test('28-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
