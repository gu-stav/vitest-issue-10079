import {test, expect} from 'vitest'

test('05-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(5 + 5).toBe(5 * 2)
})

test('05-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
