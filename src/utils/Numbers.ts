export default class Numbers {

  static range(start: number, stop: number, step: number = 1) : number[]{
    const range = []
    for (let i = start; i < stop; i += step) {
      range.push(i)
    }
    return range
  }
  
  static all(value: number, length: number): number[] {
    const all = []
    Numbers.range(0, length).forEach(() => all.push(value))
    return all
  }
}