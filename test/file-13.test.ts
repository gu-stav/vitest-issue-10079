import {test, expect} from 'vitest'

test('13-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(13 + 13).toBe(13 * 2)
})

test('13-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
