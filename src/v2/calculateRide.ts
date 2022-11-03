// @ts-nocheck
// calculate ride

const OVERNIGHT_FARE = 3.90
const OVERNIGHT_SUNDAY_FARE = 5
const SUNDAY_FARE = 2.90
const NORMAL_FARE = 2.10
const OVERNIGHT_START = 22
const OVERNIGHT_END = 6
const MIN_FARE = 10

type Segment = {
	distance: number
	date: Date
}

function isOvernight (date: Date) {
	return date.getHours() >= OVERNIGHT_START || date.getHours() <= OVERNIGHT_END
}

function isSunday (date: Date) {
	return date.getDay() === 0
}

function isValidDistance (distance: number) {
	return distance && distance > 0
}

function isValidDate (date: Date) {
	return date && date.toString() !== "Invalid Date"
}

export function calculateRide (segments: Segment[]) {
	let fare = 0;
	for (const segment of segments) {
		if (!isValidDistance(segment.distance)) throw new Error("Invalid distance")
		if (!isValidDate(segment.date)) throw new Error("Invalid date")
		if (isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_FARE
		}
		if (isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_SUNDAY_FARE
		}
		if (!isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * SUNDAY_FARE

		}
		if (!isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * NORMAL_FARE
		}
	}
	return fare < MIN_FARE ? MIN_FARE : fare
}
