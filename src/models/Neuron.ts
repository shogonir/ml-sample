import Numbers from "../utils/Numbers";
import MathUtil from "../utils/MathUtil";

import ActivationFunction from './activationFunction/ActivationFunction'
import StandardSigmoidFunction from './activationFunction/StandardSigmoidFunction'

export default class Neuron {

  numberOfInputs: number

  weightList: number[]

  activationFunction: ActivationFunction

  constructor(numberOfInputs: number, activationFunction: ActivationFunction = new StandardSigmoidFunction()) {
    this.numberOfInputs = numberOfInputs
    this.weightList = Numbers.all(0, numberOfInputs)
    this.activationFunction = activationFunction
  }

  calculate(input: number[]): number {
    const sum = this.sumProducts(input)
    return this.activationFunction.func(sum)
  }

  private sumProducts(input: number[]): number {
    let sum = 0
    input.forEach((value, index) => {
      sum += value * this.weightList[index]
    })
    return sum
  }

  train(inputData: number[][], outputList: number[], times: number, learningRate: number = 0.1): void {
    Numbers.range(0, times).forEach(() => this.oneTrain(inputData, outputList, learningRate))
  }

  private oneTrain(inputData: number[][], outputList: number[], learningRate: number) {
    const deltaBaseList: number[] = []
    inputData.forEach((input: number[], index: number) => {
      const calculatedOutput = this.calculate(input)
      const correctOutput = outputList[index]
      const sumProducts = this.sumProducts(input)
      const differentiatedOutput = this.activationFunction.diff(sumProducts)
      deltaBaseList.push((calculatedOutput - correctOutput) * differentiatedOutput)
    })

    this.weightList.forEach((weight: number, weightIndex: number) => {
      let sum = 0
      inputData.forEach((input: number[], inputIndex: number) => {
        sum += deltaBaseList[inputIndex] * input[weightIndex]
      })
      this.weightList[weightIndex] = weight - (sum * learningRate)
    })
  }
}