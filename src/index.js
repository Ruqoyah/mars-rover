const rl = require('readline').createInterface({
    input: process.stdin
})

const MarsRover = require('./MarsRover.js')

let rover;
let roverCount = 1;
let output;

// Split data by column and get the real value
const getValue = (data) => data.includes(":") ? data.split(":")[1] : data;

rl.on('line', function (data) {
    if (data.includes("Plateau")) {

        const dataSplit = getValue(data).split(" ");
        rover = new MarsRover(dataSplit[0], dataSplit[1]);

    } else if (data.includes("Landing")) {

        const dataSplit = getValue(data).split(" ");
        rover.setPosition(dataSplit[0], dataSplit[1], dataSplit[2]);

    } else if (data.includes("Instructions")) {

        rover.controlRover(getValue(data));
        output = rover.getPosition();
        console.log(`Rover${roverCount}:${output}`);
        roverCount++

    } 
})
