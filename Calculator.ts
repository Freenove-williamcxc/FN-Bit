 
 
 
enum  sign{
    //% block="+"
    add = 1,
    //% block="-"
    sub = 2,
     //% block="*"
     mul = 3,
     //% block="/"
     div = 4
}

//% weight=100 color=#0fbc11 icon="\uf021"
namespace FN_Bit {

    let i = 0
    let list: string[][] = []
    let row: number[] = []
    let colume: number[] = []

    let num1 = 0
    let num2 = 0
    let val = 0
    let num = 0

    list = [["1", "2", "3", "/"], ["4", "5", "6", "*"], ["7", "8", "9", "-"], ["C", "0", " ", "+"]]
    colume = [0]
    row = [0]



 //% subcategory="Calculator"
 
//% blockId="sign_conv" block="%del"
 
export function delimiters(del : sign) : string {
    switch(del) {
        case sign.add: return "+" ; 
        case sign.sub:  return "-"; 
        case sign.mul: return "*";  
        case sign.div:  return "/"; 
 
    }
}

 //% subcategory="Calculator"
//% block
 
export function LcdShow() {
      lcd1602.setAddress(
          lcd1602.I2C_ADDR.addr1
      )
      lcd1602.putString(
          "Hello Freenove!",
          0,
          0
      )
      lcd1602.putString(
          "Welcome you!",
          0,
          1
      )
      basic.pause(1000)
      lcd1602.clear()
      lcd1602.set_backlight(lcd1602.on_off.on)
  }


 //% subcategory="Calculator"
 
 //% block=" dispaly One of Calculator:%value "
 
    export function dispaly_One_Calculator(value: string) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        row[i] = pins.digitalReadPin(DigitalPin.P12) + pins.digitalReadPin(DigitalPin.P13) * 2 + pins.digitalReadPin(DigitalPin.P14) * 3 + pins.digitalReadPin(DigitalPin.P15) * 4
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        colume[i] = pins.digitalReadPin(DigitalPin.P0) + pins.digitalReadPin(DigitalPin.P1) * 2 + pins.digitalReadPin(DigitalPin.P2) * 3 + pins.digitalReadPin(DigitalPin.P8) * 4
        if (colume[i] + row[i] != 0) {
            basic.showString(list[colume[i] - 1][row[i] - 1])

            if (list[colume[i] - 1][row[i] - 1] == "C") {
                lcd1602.clear();
                i = 0
                num1 = 0
                num2 = 0
                num = 0
                val = 0
                lcd1602.putNumber(
                    num,
                    0,
                    1
                )
                return
            }

            lcd1602.putString(
                list[colume[i] - 1][row[i] - 1],
                i,
                0
            )
            Calculator(value)
            i += 1
            basic.pause(100)
        }
    }

//% subcategory="Calculator"
 //% block = "display full caluculators"

    export function dispaly_Full_Calculator() {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        row[i] = pins.digitalReadPin(DigitalPin.P12) + pins.digitalReadPin(DigitalPin.P13) * 2 + pins.digitalReadPin(DigitalPin.P14) * 3 + pins.digitalReadPin(DigitalPin.P15) * 4
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        colume[i] = pins.digitalReadPin(DigitalPin.P0) + pins.digitalReadPin(DigitalPin.P1) * 2 + pins.digitalReadPin(DigitalPin.P2) * 3 + pins.digitalReadPin(DigitalPin.P8) * 4
        if (colume[i] + row[i] != 0) {
            basic.showString(list[colume[i] - 1][row[i] - 1])

            if (list[colume[i] - 1][row[i] - 1] == "C") {
                lcd1602.clear();
                i = 0
                num1 = 0
                num2 = 0
                num = 0
                val = 0
                lcd1602.putNumber(
                    num,
                    0,
                    1
                )
                return
            }

            lcd1602.putString(
                list[colume[i] - 1][row[i] - 1],
                i,
                0
            )
            Calculator("+")
            Calculator("-")
            Calculator("*")
            Calculator("/")
            i += 1
            basic.pause(100)
        }
    }

    function Calculator(s: string) {
        if (list[colume[i] - 1][row[i] - 1] == s) {

            val = i
            for (let r = 0; r < i; r++) {
                num1 += (parseInt(list[colume[r] - 1][row[r] - 1])) * Math.pow(10, i - r - 1)
            }

        }

        if (list[colume[i] - 1][row[i] - 1] == " " && list[colume[val] - 1][row[val] - 1] == s) {
            let val2 = val + 1;

            for (; val2 < i; val2++) {
                num2 += (parseInt(list[colume[val2] - 1][row[val2] - 1]) * Math.pow(10, i - val2 - 1))
            }
            if (s == "+") {
                num = num1 + num2
            }
            if (s == "-") {
                num = num1 - num2
            }
            if (s == "*") {
                num = num1 * num2
            }
            if (s == "/") {
                num = num1 / num2
            }

            lcd1602.putNumber(
                num,
                0,
                1
            )
            i = 0
            return

        }
    }
 
}