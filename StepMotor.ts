
enum Circle {
    //% block="half"
    circle1 = 64,
    //% block="1"
    circle2 = 16 * 64,
    //% block="2"
    circle3 = 32 * 64,

}

enum Speed {
    //% block="1"
    speed1 = 1,
    //% block="2"
    speed2 = 10,
    //% block="3"
    speed3 = 20,


}

enum Dir {
    //% block="left"
    left = 0,
    //% block="right"
    right = 1,
}

//%   weight=88 icon="\uf021"
namespace FN_Bit {

    let list: DigitalPin[] = [DigitalPin.P3, DigitalPin.P2, DigitalPin.P1, DigitalPin.P0]
    let out = 1


    //% subcategory="StepMotor"
    //% block   
    export function moveLeft(): void {
        for (let j = 0; j < 32 * 64; j++) {
            moveOneStep(0);
            basic.pause(2);
        }
    }


    //% subcategory="StepMotor"
    //% block     
    export function moveRight(): void {
        for (let j = 0; j < 32 * 64; j++) {
            moveOneStep(1);
            basic.pause(2);
        }
    }


   
    //% subcategory="StepMotor"
    //% block="move dir: $dir circle: $circle speed: $speed" 
    //% circle.fieldEditor="gridpicker"
    //% circle.fieldOptions.width=220
    //% circle.fieldOptions.columns=3
    //% dir.fieldEditor="gridpicker"
    //% dir.fieldOptions.width=220
    //% dir.fieldOptions.columns=3
    //% speed.fieldEditor="gridpicker"
    //% speed.fieldOptions.width=220
    //% speed.fieldOptions.columns=3
    export function moveSteps(dir: Dir, circle: Circle, speed: Speed): void {
        for (let j = 0; j < circle; j++) {
            moveOneStep(dir);
            basic.pause(speed);
        }
    }

  



    export function moveOneStep(dir: Dir) {
        if (dir) {
            out != 0x08 ? out = out << 1 : out = 0x01
        }
        else {
            out != 0x01 ? out = out >> 1 : out = 0x08;
        }

        for (let i = 0; i < 4; i++) {
            pins.digitalWritePin(list[i], (out & (0x01 << i)) ? 1 : 0)
        }


    }



}