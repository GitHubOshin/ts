// ---- Class ----
class Point {
  x: number = 0
  y: number = 0
}

const point = new Point()
point.x = 10
point.y = 20
console.log(point.x)
console.log(`${point.x} + ${point.y} = 30`)

// ---- Class & Constructor ----

class Scores {
  math: number
  eng: number
  readonly level: number = 7
  constructor(math: number = 0, eng: number = 0) {
    this.math = math
    this.eng = eng
    console.log('Yo! Yo!')
  }
}

const scores = new Scores(99, 100)
console.log(scores)
// scores.level = 8

// ---- Overloads ----

class MyNumber {
  // x:number = 0
  // y:number = 0
  constructor(x: number, y: string)
  constructor(s: string)
  constructor(xs: any, y?: any) {
    // if (typeof xs === "number" && typeof y === "string") {
    //   this.x = xs
    //   this.y = y
    // } else if (typeof xs === "string") {
    //   this.x = 0
    //   this.y = xs
    // }
  }
}

// ---- Geter / Seter ----

class GetPoint {
  _x: number = 0
  get x(): number {
    this._x = this._x + 1
    return this._x
  }
  set x(value: number) {
    this._x = value
  }
}

const p = new GetPoint()
console.log(p._x)
console.log(p.x)
console.log(p.x)
console.log(p.x)
