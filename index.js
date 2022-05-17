function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(startStreet, endStreet) {
    return Math.abs(endStreet - startStreet) * 264
}

function calculatesFarePrice(startStreet, endStreet) {
    let distance = distanceTravelledInFeet(startStreet, endStreet) - 400
    if (distance <= 0) {
        return 0
    } else if (distance <= 1600) {
       return distance * .02
    } else if (distance <= 2100) {
        return 25
    } else if (distance > 2100) {
        return "cannot travel that far"
    }
}
