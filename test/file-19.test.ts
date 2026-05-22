import {test, expect} from 'vitest'

test('19-a', async () => {
  await new Promise((r) => setTimeout(r, 5))
  expect(19 + 19).toBe(19 * 2)
})

test('19-b', async () => {
  const arr = Array.from({length: 1000}, (_, n) => n)
  expect(arr.reduce((a, b) => a + b, 0)).toBe(499500)
})
