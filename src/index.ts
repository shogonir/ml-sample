import Neuron from "./models/Neuron";

const neuron: Neuron = new Neuron(3)
const inputData: number[][] = [
  [1, 0, 0],
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 1]
]
const outputList: number[] = [
  0,
  0,
  0,
  1
]

inputData.forEach((input) => {
  console.log(`${JSON.stringify(input)} -> ${neuron.calculate(input)}`)
})

console.log()
console.log('training...')

neuron.train(inputData, outputList, 1000, 0.5)

console.log('complete training')
console.log()

inputData.forEach((input) => {
  console.log(`${JSON.stringify(input)} -> ${neuron.calculate(input).toFixed(4)}`)
})

console.log('finally weight is as below')
console.log(neuron.weightList)