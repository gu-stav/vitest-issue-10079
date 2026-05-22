import {test, expect} from 'vitest'

test('22-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(22 + 22).toBe(22 * 2)
})

test('22-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
