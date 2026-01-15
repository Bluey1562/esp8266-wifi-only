/**
 * ESP8266 WiFi Extension
 */
//% color=#0fbcf9 icon="\uf1eb" block="ESP8266 WiFi"
namespace ESP8266 {

    /**
     * Inisialisasi ESP8266
     * @param tx pin TX
     * @param rx pin RX
     * @param baud baud rate
     */
    //% block="ESP8266 init TX %tx RX %rx baud %baud"
    //% baud.defl=115200
    export function init(
        tx: SerialPin,
        rx: SerialPin,
        baud: number = 115200
    ) {
        serial.redirect(tx, rx, baud)
        basic.pause(1000)
        send("AT")
        basic.pause(1000)
        send("AT+CWMODE=1")
        basic.pause(1000)
    }

    /**
     * Connect ke WiFi
     * @param ssid nama wifi
     * @param password password wifi
     */
    //% block="ESP8266 connect WiFi SSID %ssid PASSWORD %password"
    export function connectWiFi(ssid: string, password: string) {
        send(`AT+CWJAP="${ssid}","${password}"`)
        basic.pause(5000)
    }

    function send(cmd: string) {
        serial.writeString(cmd + "\r\n")
    }
}

