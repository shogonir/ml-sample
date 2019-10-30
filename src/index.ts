/**
 * Single Perceptron
 */


// import Neuron from "./models/Neuron";

// const neuron: Neuron = new Neuron(3)
// const inputData: number[][] = [
//   [1, 0, 0],
//   [1, 0, 1],
//   [1, 1, 0],
//   [1, 1, 1]
// ]
// const outputList: number[] = [
//   0,
//   0,
//   0,
//   1
// ]

// inputData.forEach((input) => {
//   console.log(`${JSON.stringify(input)} -> ${neuron.calculate(input)}`)
// })

// console.log()
// console.log('training...')

// neuron.train(inputData, outputList, 1000, 0.5)

// console.log('complete training')
// console.log()

// inputData.forEach((input) => {
//   console.log(`${JSON.stringify(input)} -> ${neuron.calculate(input).toFixed(4)}`)
// })

// console.log('finally weight is as below')
// console.log(neuron.weightList)



/**
 * Standard Normal Distribution
 */

import RandomUtil from './utils/RandomUtil'
import Numbers from './utils/Numbers'

const numbers: number[] = Numbers.range(0, 1000 * 1000).map(() => {
  return RandomUtil.extractFromStandardNormalDistribution()
})

const min: number = -5
const max: number = 5
const interval: number = 0.2
const maxCharacters: number = 50
const countList: number[] = []
const legends: string[] = []

for (let x = min; x <= max; x += interval) {
  const count: number = numbers.filter((value) => {
    return value > x - interval / 2 && value < x + interval / 2
  }).length
  countList.push(count)
  legends.push((x>0 ? ' ' : '') + x.toFixed(1).toString())
}

const maxValue: number = Math.max(...countList)

countList.forEach((count: number, index: number) => {
  let bar: string = ''
  Numbers.range(0, count / maxValue * maxCharacters).forEach((numCharacters: number) => {
    bar += '='
  })
  console.log(legends[index], bar)
})
