//% weight=100 color=#0fb611 icon=""
//% groups=['Sprite','Maths', 'Array Blocks', 'Info', 'String', 'Base Converter']
namespace SenseisUsefulBlocks {
    
    //% block="π pi"
    //% group="Maths" color=#d16106
    export const pi = Math.PI
    
    //% block="Round %x with precision %digit"
    //% group="Maths" color=#d16106
    export function roundWithPrecision(x: number, digit: number):number {
        return Math.roundWithPrecision(x, digit)
    }
    
    //% block="Convert %arr to string"
    //% group="Array Blocks" color=#63013e
    //% arr.defl=Array
    export function ArrToString(arr: any[]): string {
        let arrString = ""
        for (let i = 0; i < arr.length; i++) {
            arrString = arrString + arr[i]
        }
        return arrString
    }
    
    //% block="Convert $int To array of digits"
    //% group="Array Blocks" color=#63013e
    //% int.defl=0
    export function NumberToArray(int: number): Array<number> {
        let NumAsArray: number[] = [];
        let strNum: string = "" + int;
        let strLength: number = strNum.length;
        let sum: number = 0;
    
        for (let i: number = 0; i < strLength; ++i) {
            let digit: number = parseInt(strNum.charAt(i));
            NumAsArray.push(digit)
        }
        return NumAsArray
    }
    
    //% block="Convert $str To array of characters"
    //% group="Array Blocks" color=#63013e
    //% str.defl="Text"
    export function StringToArray(str: string): Array<string> {
        let StrAsArray: string[] = [];
        let strNum: string = "" + str;
        let strLength: number = strNum.length;
        let sum: number = 0;
    
        for (let i: number = 0; i < strLength; ++i) {
            StrAsArray.push(strNum.charAt(i))
        }
        return StrAsArray
    }
    
    //% block="Split Array $list | starting at position $start and ending at | position $end"
    //% group="Array Blocks" color=#63013e
    //% list.defl=Array
    export function SplitArray(list: any[], start: number, end: number): any[] {
        return list.slice(start, end + 1)
    }
    
    
    
    
    
    //% block="Change Life Image Too $img"
    //% group="Info" color=#2f0163
    //% img.shadow="screen_image_picker"
    //% img.defl="screen_image_picker"
    export function ChangeLifeImage(img: Image): void {
        info.setLifeImage(img);
    }
    
    //% block="Set Info boxes border color too palette number $int"
    //% group="Info" color=#2f0163
    //% int.min=0
    //% int.max=15
    export function ChangeBorderColor(int: number){
        info.setBorderColor(int)
    }
    
    //% block="Set Info boxes background color too palette number $int"
    //% group="Info" color=#2f0163
    //% int.min=0
    //% int.max=15
    export function ChangeBackgroundColor(int: number) {
        info.setBackgroundColor(int)
    }
    //% block="Set Info boxes font color too palette number $int"
    //% group="Info" color=#2f0163
    //% int.min=0
    //% int.max=15
    export function ChangeFontColor(int: number) {
        info.setFontColor(int)
    }
    
    
    
    
    
    //% block = "String $str To Upper Case"
    //% group="String" color=#8a4601
    export function stringToUpper(str: string): string {
        return str.toUpperCase();
    }
    //% block = "Number $num To String"
    //% group="String" color=#8a4601
    export function NumToString(num: number): string {
        return num.toString();
    }
    
    //% block = "String $str To Lower Case"
    //% group="String" color=#8a4601
    export function stringToLower(str: string): string {
        return str.toLowerCase();
    }
    
    
    
    
    //% block="Convert $value from base $base to base 10"
    //% group="Base Converter" color=#809B01
    //% base.min=2 base.max=36 base.defl=36
    export function convert_back_to_base10(value: string, base: number): number {
        return (parseInt(value, base))
    }
    
    //% block="Convert number $num to base $base"
    //% group="Base Converter" color=#809B01
    //% base.min=2 base.max=36 base.defl=36
    export function convert_number_to_base(num: number, base: number): string {
        let mods: string[] = []
        let newValue: string = ""
        if (base < 2 || base > 36) {
            return "error, base must be at least 2 and at most 36"
        }
        while (num > 0) {
            mods.push(CHAR_LOOKUP[num % base])
            //for (let value of mods) {
            // console.log(value)
            //}
            num = Math.floor(num / base)
        }
        mods.reverse()
    
        for (let value2 of mods) {
            newValue = newValue + value2;
        }
        return newValue
    }
    let CHAR_LOOKUP: string[] = [
        "0", "1", "2", "3",
        "4", "5", "6", "7",
        "8", "9", "A", "B",
        "C", "D", "E", "F",
        "G", "H", "I", "J",
        "K", "L", "M", "N",
        "O", "P", "Q", "R",
        "S", "T", "U", "V",
        "W", "X", "Y", "Z"
    ]
    
    
    //% block="Set %sprite to sprite %image of kind %kind with gravity %gravity and jump power %jumpPower"
    //% group="Sprite" color=#809B01
    //% image.defl="screen_image_picker"
    export function createPlatformerSprite(sprite: Sprite, image:Image, gravity: Number, jumpPower: Number){
    
    }
    
    
    //% block="Set $follower=variables_get(myEnemy) to follow $lead=variables_get(mySprite) with speed $speed and turn rate $turnRate"
    //% group="Sprite" color=#4f7d22
    //% inlineInputMode=inline
    //% speed.defl=100
    //% turnRate.defl=400
    export function setFollowWithRotation(follower: Sprite, lead: Sprite, speed: number, turnRate:number){
        follower.follow(lead, speed, turnRate)
    }
    
}