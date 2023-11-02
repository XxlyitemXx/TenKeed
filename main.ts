// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    // This If statement checks that variable with the class name, and if it matches the class name you entered, it will activate the code within that block
    if (SerialData == "1") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        show_title()
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SerialData == "2") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        show_title()
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SerialData == "3") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        show_title()
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SerialData == "4") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        show_title()
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
function show_title () {
    basic.showString(SerialData)
    basic.pause(2000)
    basic.clearScreen()
}
let SerialData = ""
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
serial.redirectToUSB()
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P5) < 10) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        strip.showBarGraph(0, 255)
        basic.pause(2000)
        strip.clear()
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        strip.showBarGraph(0, 255)
        basic.pause(2000)
        strip.clear()
    }
})
