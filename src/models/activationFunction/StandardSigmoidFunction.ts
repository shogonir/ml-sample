import ActivationFunction from './ActivationFunction'
import MathUtil from '../../utils/MathUtil'

export default class StandardSigmoidFunction implements ActivationFunction {
  
  func(x: number): number {
    return MathUtil.standardSigmoid(x)
  }

  diff(x: number): number {
    return MathUtil.differentiatedStandardSigmoid(x)
  }
}