input.onButtonPressed(Button.A, function () {
    motor.motorStop(motor.Motors.M3)
    basic.pause(1000)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 100)
})
input.onButtonPressed(Button.B, function () {
    motor.motorStop(motor.Motors.M3)
    basic.pause(1000)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 100)
})
basic.forever(function () {
	
})
