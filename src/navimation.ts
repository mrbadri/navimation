import { IInput } from "./types"
import { inputValidation } from "./utils";
import { inputDefault } from "./utils/default/input";

export function Navimation(input: IInput): void {
    console.log(input);

    if(inputValidation(input)){
        input = inputDefault(input);
    }
}