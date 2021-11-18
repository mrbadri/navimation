import { IInput } from "../../../types";
import { selectorValidation } from "../selector";
const $ = require("jquery")

export function inputValidation(input: IInput): void {
    try {
        if (!selectorValidation(input.navbar))
            throw "navbar not found!";
        if (!selectorValidation(input.item))
            throw "item not found";
    } catch (error) {
        console.error(error)
    }
}