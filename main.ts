function clear () {
    basic.pause(100)
    basic.clearScreen()
    strip.clear()
    OLED.clear()
}
/**
 * after 2s da code will run
 */
// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    // This If statement checks that variable with the class name, and if it matches the class name you entered, it will activate the code within that block
    if (SerialData == "biowaste") {
        servos.P1.setAngle(45)
        basic.pause(5000)
        servos.P1.setAngle(90)
        servos.P1.stop()
    } else if (SerialData == "recycle") {
        show_title()
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (SerialData == "dangerous") {
        show_title()
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P3, 0)
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
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # # . . #
        # . # . .
        `)
    clear()
}
/**
 * github.com/imaonenub/ai-serial-connection
 */
let SerialData = ""
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P5, 30, NeoPixelMode.RGB)
serial.redirectToUSB()
clear()
basic.forever(function () {
    if (grove.measureInInchesV2(DigitalPin.P6) > 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.show()
        servos.P0.setAngle(90)
        basic.pause(5000)
        servos.P0.setAngle(90)
        clear()
    }
})
