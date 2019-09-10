export default class MathUtil {

  static standardSigmoid(x: number): number {
    return 1 / (1 + Math.pow(Math.E, -x))
  }

  static differentiatedStandardSigmoid(x: number): number {
    return MathUtil.standardSigmoid(x) * (1.0 - MathUtil.standardSigmoid(x))
  }
}