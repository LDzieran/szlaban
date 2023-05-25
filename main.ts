basic.forever(function () {
    if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 2 && PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) < 20) {
        basic.showIcon(IconNames.Happy)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 120)
        basic.pause(5000)
    } else {
        basic.showIcon(IconNames.Heart)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
    }
})
