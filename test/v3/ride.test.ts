import Ride from "../../src/v3/ride"


describe('Calc', () => {
  it('should calculate a race at normal time', () => {
    const ride = new Ride()
    ride.addSegment(10, new Date("2021-03-10T10:00:00"))
    const fare = ride.calculateFare()
    expect(fare).toBe(21)
  })

  it('should calculate a night time race', () => {
    const ride = new Ride()
    ride.addSegment(10, new Date("2021-03-10T22:00:00"))
    const fare = ride.calculateFare()
    expect(fare).toBe(39)
  })

  it('should calculate a race on Sunday', () => {
    const ride = new Ride()
    ride.addSegment(10, new Date("2021-03-07T10:00:00"))
    const fare = ride.calculateFare()
    expect(fare).toBe(29)
  })

  it('should calculate a race on Sunday at night time', () => {
    const ride = new Ride()
    ride.addSegment(10, new Date("2021-03-07T22:00:00"))
    const fare = ride.calculateFare()
    expect(fare).toBe(50)
  })

  it('should not calculate a race with an invalid distance', () => {
    const ride = new Ride()
    expect(() => ride.addSegment(-10, new Date("2021-03-10T10:00:00") )).toThrow(new Error("Invalid distance"))
  })

  it('should not calculate a race with an invalid date', () => {
    const ride = new Ride()
    expect(() => ride.addSegment(10, new Date("invalid-date"))).toThrow(new Error("Invalid date"))
  })

  it('should calculate a race at normal time with minimum value', () => {
    const ride = new Ride()
    ride.addSegment(3, new Date("2021-03-10T10:00:00"))
    const fare = ride.calculateFare()
    expect(fare).toBe(10)
  })
})