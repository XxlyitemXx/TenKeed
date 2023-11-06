def show_title():
    basic.pause(100)
# This block listens to the website for your class names, and saves them as a variable

def on_data_received():
    global SerialData
    SerialData = serial.read_until(serial.delimiters(Delimiters.NEW_LINE))
    if SerialData == "biowaste":
        show_title()
        servos.P0.set_angle(90)
        basic.pause(2000)
        servos.P0.set_angle(40)
    elif SerialData == "recycle":
        show_title()
        servos.P1.set_angle(90)
        basic.pause(2000)
        servos.P1.set_angle(40)
    elif SerialData == "dangerous":
        show_title()
        servos.P2.set_angle(90)
        basic.pause(2000)
        servos.P2.set_angle(40)
    elif SerialData == "normalwaste":
        show_title()
        pins.digital_write_pin(DigitalPin.P3, 1)
        basic.pause(2000)
        pins.digital_write_pin(DigitalPin.P3, 0)
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

SerialData = ""
serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BAUD_RATE9600)
servos.P0.set_angle(40)
servos.P1.set_angle(40)
servos.P2.set_angle(40)

def on_forever():
    if grove.measure_in_inches_v2(DigitalPin.P0) > 1:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digital_write_pin(DigitalPin.P0, 0)
basic.forever(on_forever)
