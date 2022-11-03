import { calc } from "../../src/v1/calc"

describe('Calc', () => {
  it('should calculate a race at normal time', () => {
    const fare = calc([{dist: 10, ds: new Date("2021-03-10T10:00:00")}])
    expect(fare).toBe(21)
  })

  it('should calculate a night time race', () => {
    const fare = calc([{dist: 10, ds: new Date("2021-03-10T22:00:00")}])
    expect(fare).toBe(39)
  })

  it('should calculate a race on Sunday', () => {
    const fare = calc([{dist: 10, ds: new Date("2021-03-07T10:00:00")}])
    expect(fare).toBe(29)
  })

  it('should calculate a race on Sunday at night time', () => {
    const fare = calc([{dist: 10, ds: new Date("2021-03-07T22:00:00")}])
    expect(fare).toBe(50)
  })

  it('should not calculate a race with an invalid distance', () => {
    const fare = calc([{dist: -1, ds: new Date("2021-03-10T10:00:00")}])
    expect(fare).toBe(-1)
  })

  it('should not calculate a race with an invalid date', () => {
    const fare = calc([{dist: 10, ds: new Date("invalid-date")}])
    expect(fare).toBe(-2)
  })

  it('should calculate a race at normal time with minimum value', () => {
    const fare = calc([{dist: 3, ds: new Date("2021-03-10T10:00:00")}])
    expect(fare).toBe(10)
  })
})