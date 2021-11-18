import { IInput } from "./types"
import { inputValidation , inputDefault } from "./utils";

export function Navimation(input: IInput): void {

    if(inputValidation(input)){
        input = inputDefault(input);
        console.log(input);
        
    }
}