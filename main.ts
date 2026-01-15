namespace ESP8266 {
    export function init(tx: SerialPin, rx: SerialPin, baud: number = 115200) {
        serial.redirect(tx, rx, baud)
        basic.pause(1000)
        send("AT")
        basic.pause(1000)
        send("AT+CWMODE=1")
        basic.pause(1000)
    }

    export function connectWiFi(ssid: string, password: string) {
        send(`AT+CWJAP="${ssid}","${password}"`)
        basic.pause(5000)
    }

    function send(cmd: string) {
        serial.writeString(cmd + "\r\n")
    }
}
