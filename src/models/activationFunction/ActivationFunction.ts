export default interface ActivationFunction {
  func(x: number): number
  diff(x: number): number
}