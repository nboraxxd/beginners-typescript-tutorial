import { expect, it } from 'vitest'

// function coerceAmount (amount: number | { amount: number }): number {
//   if (typeof amount === 'number') {
//     return amount
//   }

//   return amount.amount
// }

// const coerceAmount = (amount: number | { amount: number }) => {
//   if (typeof amount === 'number') {
//     return amount
//   }

//   return amount.amount
// }

const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === 'object') {
    return amount.amount
  }

  return amount
}

it('Should return the amount when passed an object', () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20)
})

it('Should return the amount when passed a number', () => {
  expect(coerceAmount(20)).toEqual(20)
})
