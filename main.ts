function clear () {
    basic.pause(100)
    basic.clearScreen()
    strip.clear()
}
// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (SerialData == "biowaste") {
        show_title()
        servos.P0.setAngle(90)
        basic.pause(5000)
        servos.P0.setAngle(40)
    } else if (SerialData == "recycle") {
        show_title()
        servos.P1.setAngle(90)
        basic.pause(5000)
        servos.P1.setAngle(40)
    } else if (SerialData == "dangerous") {
        show_title()
        servos.P2.setAngle(90)
        basic.pause(5000)
        servos.P2.setAngle(40)
    } else if (SerialData == "normalwaste") {
        show_title()
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
})
function show_title () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(100)
    clear()
}
/**
 * github.com/imaonenub/ai-serial-connection
 */
let SerialData = ""
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P5, 30, NeoPixelMode.RGB)
serial.redirectToUSB()
servos.P0.setAngle(40)
servos.P1.setAngle(40)
servos.P2.setAngle(40)
basic.forever(function () {
    if (grove.measureInInchesV2(DigitalPin.P0) > 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.show()
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        clear()
    }
})
