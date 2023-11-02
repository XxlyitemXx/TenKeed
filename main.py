# This block listens to the website for your class names, and saves them as a variable

def on_data_received():
    global SerialData
    SerialData = serial.read_until(serial.delimiters(Delimiters.NEW_LINE))
    # This If statement checks that variable with the class name, and if it matches the class name you entered, it will activate the code within that block
    if SerialData == "1":
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_string("1")
        basic.pause(5000)
        pins.digital_write_pin(DigitalPin.P0, 0)
    elif SerialData == "2":
        pins.digital_write_pin(DigitalPin.P0, 1)
        servos.P2.set_angle(90)
        basic.show_string("2")
        basic.pause(5000)
        servos.P2.set_angle(180)
        pins.digital_write_pin(DigitalPin.P0, 0)
    elif SerialData == "3":
        pins.digital_write_pin(DigitalPin.P0, 1)
        servos.P2.set_angle(90)
        basic.show_string("3")
        basic.pause(5000)
        servos.P2.set_angle(180)
        pins.digital_write_pin(DigitalPin.P0, 0)
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

SerialData = ""
serial.redirect_to_usb()
basic.show_icon(IconNames.YES)
basic.clear_screen()

def on_forever():
    if Environment.sonarbit_distance(Environment.Distance_Unit.DISTANCE_UNIT_CM, DigitalPin.P5) < 10:
        pins.digital_write_pin(DigitalPin.P0, 1)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
basic.forever(on_forever)

def on_forever2():
    basic.show_string(serial.read_string())
    basic.pause(2000)
    basic.clear_screen()
basic.forever(on_forever2)
