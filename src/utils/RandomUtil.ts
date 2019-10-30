export default class RandomUtil {

  static extractFromStandardNormalDistribution(): number {
    const x: number = Math.random()
    const y: number = Math.random()
    const coefficient: number = Math.sqrt(-2 * Math.log(x))
    const radian: number = 2 * y * Math.PI
    const z1: number = coefficient * Math.cos(radian)
    // const z2: number = coefficient * Math.sin(radian)
    return z1
  }
}