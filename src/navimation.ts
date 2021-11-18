import { IInput } from "./types"
import { inputValidation , inputDefault } from "./utils";

export function Navimation(input: IInput): void {
    console.log(input);
    console.log(inputDefault(input));
    console.log(inputValidation(input));
    
    

    if(inputValidation(input)){
        input = inputDefault(input);
    }
}