export default class MathUtil {

  static normalSigmoid(x: number): number {
    return 1 / (1 + Math.pow(Math.E, -x))
  }

  static differentiatedNormalSigmoid(x: number): number {
    return MathUtil.normalSigmoid(x) * (1.0 - MathUtil.normalSigmoid(x))
  }
}