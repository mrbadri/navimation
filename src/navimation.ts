import { controller } from "./controller";
import { IInput } from "./types"
import { inputValidation, inputDefault } from "./utils";

export function Navimation(input: IInput): void {
    if (inputValidation(input)) {
        input = inputDefault(input);
        controller(input);
    }
}