function clear () {
    basic.pause(100)
    basic.clearScreen()
}
// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (SerialData == "biowaste") {
        show_title()
        servos.P0.setAngle(90)
        basic.pause(2000)
        servos.P0.setAngle(40)
    } else if (SerialData == "recycle") {
        show_title()
        servos.P1.setAngle(90)
        basic.pause(2000)
        servos.P1.setAngle(40)
    } else if (SerialData == "dangerous") {
        show_title()
        servos.P2.setAngle(90)
        basic.pause(2000)
        servos.P2.setAngle(40)
    } else if (SerialData == "normalwaste") {
        show_title()
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
})
function show_title () {
    basic.pause(100)
    clear()
}
let SerialData = ""
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
servos.P0.setAngle(40)
servos.P1.setAngle(40)
servos.P2.setAngle(40)
basic.forever(function () {
    if (grove.measureInInchesV2(DigitalPin.P0) > 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        clear()
    }
})
