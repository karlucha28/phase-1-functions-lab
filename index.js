// Code your solution in this file!
function distanceFromHqInBlocks(somevalue) {
    if (somevalue > 42) {
        return somevalue - 42
    } else if (somevalue < 42) {
        return 42 - somevalue 
    }
}
function distanceFromHqInFeet(somevalue) {
    return distanceFromHqInBlocks(somevalue)*264;
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start-destination)*264
    } else if ( start < destination) {
        return (destination - start)*264
    }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        return  (distanceTravelledInFeet(start, destination) - 400) * 0.02 
    } else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25 
    } else {
        return 'cannot travel that far'
    }
}