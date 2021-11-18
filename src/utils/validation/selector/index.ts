const $ = require("jquery")

export function selectorValidation(value: string): boolean {
    if (value) {
        if ($(`${value}`).length == 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}