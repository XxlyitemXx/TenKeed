/**
 * Change the "Class 1" bubbles in the if statements to the same names as the classes you made on Teachable Machine. 
 * 
 * Spaces, spelling and capitalization matters! 
 * 
 * Class names can't be longer than 12 characters.
 */
/**
 * Anything you put inside these if statements will be activated when the micro:bit receives that class name from the https://microbitai.inventor.city 
 * 
 *  vision recognition website
 */
/**
 * Click on the + to add more classes, and the - to delete them
 * 
 * Just duplicate this <SerialData = " "> hexagon and place it into the  new else if statement
 */
// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    // This If statement checks that variable with the class name, and if it matches the class name you entered, it will activate the code within that block
    if (SerialData == "1") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showString("1")
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SerialData == "2") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        servos.P2.setAngle(90)
        basic.showString("2")
        basic.pause(5000)
        servos.P2.setAngle(180)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SerialData == "3") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        servos.P2.setAngle(90)
        basic.showString("3")
        basic.pause(5000)
        servos.P2.setAngle(180)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
let SerialData = ""
serial.redirectToUSB()
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P5) < 10) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    basic.showString(serial.readString())
    basic.pause(2000)
    basic.clearScreen()
})
