import {test, expect} from 'vitest'

test('18-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(18 + 18).toBe(18 * 2)
})

test('18-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
