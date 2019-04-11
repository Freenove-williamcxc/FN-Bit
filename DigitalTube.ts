
enum Num {
    //% block="0"
    num0 = 192,
    //% block="1"
    num1 = 249,
    //% block="2"
    num2 = 164,
    //% block="3"
    num3 = 176,
    //% block="4"
    num4 = 153,
    //% block="5"
    num5 = 146,
    //% block="6"
    num6 = 130,
    //% block="7"
    num7 = 248,
    //% block="8"
    num8 = 128,
    //% block="9"
    num9 = 144,
    //% block="A"
    numa = 136,
    //% block="B"
    numb = 131,
    //% block="C"
    numc = 198,
    //% block="D"
    numd = 161,
    //% block="E"
    nume = 134,
    //% block="F"
    numf = 142,

}

let list = [192,249,164,176,153, 146,130,248,128,144,136,131,198,161,134, 142];


//% weight=100 color=#0fbc11 icon="\uf021"
namespace FN_Bit {
    /**
     * TODO: 在此处描述您的函数
     * @param n 在此处描述参数, eg: 5
     * @param s 在此处描述参数, eg: "Hello"
     * @param e 在此处描述参数
     */
    //% subcategory="DigitalTube"
    //% block   

    //% num.fieldEditor="gridpicker"
    //% num.fieldOptions.width=220
    //% num.fieldOptions.columns=3
    export function ShowNumber(num: Num): void {

        pins.digitalWritePin(DigitalPin.P16, 0)
        for (let j = 0; j < 8; j++) {
            pins.digitalWritePin(DigitalPin.P8, 0);
            pins.digitalWritePin(DigitalPin.P1, ((0x80 & (num << j)) == 0x80) ? 1 : 0)
            pins.digitalWritePin(DigitalPin.P8, 1);
        }
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(1000)
    }

    //% subcategory="DigitalTube"
    //% block    
    export function Write_number(dig: number) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        for (let j = 0; j < 8; j++) {
            pins.digitalWritePin(DigitalPin.P8, 0);
            pins.digitalWritePin(DigitalPin.P1, ((0x80 & (list[dig] << j)) == 0x80) ? 1 : 0)
            pins.digitalWritePin(DigitalPin.P8, 1);
        }
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(1000)

    }
}
