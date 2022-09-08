// Code your solution in this file!
function returnFirstTwoDrivers(array){
    console.log(array[0]) 
    return [array [0], array [1]]
}

function returnLastTwoDrivers(array) {
    console.log(array[0])
    return [array [2], array [3]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, callback) {
    return callback(array)
}