import { IInput } from "../../../types";
import { selectorValidation } from "../selector";

const $ = require("jquery")

export function inputValidation(input: IInput): boolean {
    try {
        if (!selectorValidation(input.navbar))
            throw "navbar not found!";

        if (!selectorValidation(input.item))
            throw "item not found";

        return true;
    } catch (error) {
        console.error(error)

        return false;
    }
}