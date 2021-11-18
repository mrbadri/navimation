import { IInput } from "./types"
import { inputValidation } from "./utils";

export function Navimation(input: IInput): void {
    console.log(input);

    inputValidation(input);
}