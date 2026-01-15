/**
 * ESP8266 WiFi Only Library
 */

//% color="#1E90FF" weight=100 icon="\uf1eb"
namespace esp8266wifi {

    //% blockId=esp_wifi_init
    //% block="ESP8266 init TX %tx RX %rx baud %baud"
    export function init(tx: SerialPin, rx: SerialPin, baud: BaudRate) {
        serial.redirect(tx, rx, baud)
        basic.pause(2000)
    }

    //% blockId=esp_wifi_test
    //% block="ESP8266 test AT"
    export function testAT() {
        serial.writeString("AT\r\n")
        basic.pause(1000)
    }

    //% blockId=esp_wifi_connect
    //% block="ESP8266 connect WiFi SSID %ssid PASSWORD %pwd"
    export function connectWiFi(ssid: string, pwd: string) {
        serial.writeString("AT+CWMODE=1\r\n")
        basic.pause(1000)

        serial.writeString(
            "AT+CWJAP=\"" + ssid + "\",\"" + pwd + "\"\r\n"
        )
        basic.pause(7000)
    }
}
