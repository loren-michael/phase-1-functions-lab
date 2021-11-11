const hq = 42;

function distanceFromHqInBlocks(pickup) {
    if (pickup <= hq) {
        return distanceFromHqInBlocks = (hq - pickup);
    } else if (pickup >= hq) {
        return distanceFromHqInBlocks = (pickup - hq);
    }
}

function distanceFromHqInFeet(pickup) {
    if (pickup <= hq) {
        distanceFromHqInBlocks = (hq - pickup);
        return distanceFromHqInFeet = (distanceFromHqInBlocks * 264);
    } else if (pickup >= hq) {
        distanceFromHqInBlocks = (pickup - hq);
        return distanceFromHqInFeet = (distanceFromHqInBlocks * 264);
    }
}

function distanceTravelledInFeet(pickup, dropoff) {
    let distanceTravelledInBlocks = Math.abs(pickup - dropoff);
    return distanceTravelledInBlocks * 264;
}

function calculatesFarePrice(start, destination) {
    let distanceTravelledInFeet = Math.abs((start - destination) * 264);
    if (distanceTravelledInFeet < 400) {
        return distanceTravelledInFeet * 0;
    } else if (distanceTravelledInFeet <= 2000) {
        return (distanceTravelledInFeet - 400) * .02;
    } else if (distanceTravelledInFeet < 2500) {
        return 25;
    } else if (distanceTravelledInFeet >= 2500) {
        return 'cannot travel that far'
    }
}