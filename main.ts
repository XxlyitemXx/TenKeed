// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (SerialData == "biowaste") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.digitalWritePin(DigitalPin.P5, 1)
        servos.P0.setAngle(90)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        servos.P0.setAngle(40)
        pins.digitalWritePin(DigitalPin.P5, 0)
        strip.clear()
    } else if (SerialData == "recycle") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.digitalWritePin(DigitalPin.P5, 1)
        servos.P1.setAngle(90)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        servos.P1.setAngle(40)
        pins.digitalWritePin(DigitalPin.P5, 0)
        strip.clear()
    } else if (SerialData == "dangerous") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.digitalWritePin(DigitalPin.P5, 1)
        servos.P2.setAngle(90)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        servos.P2.setAngle(40)
        pins.digitalWritePin(DigitalPin.P5, 0)
        strip.clear()
    } else if (SerialData == "normalwaste") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P3, 1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
        strip.clear()
    }
})
let SerialData = ""
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P6, 24, NeoPixelMode.RGB)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
servos.P0.setAngle(40)
servos.P1.setAngle(40)
servos.P2.setAngle(40)
music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
strip.showColor(neopixel.colors(NeoPixelColors.White))
