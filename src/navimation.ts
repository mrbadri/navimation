import { IInput } from "./types"
import { inputController } from "./utils";

export function Navimation(input: IInput): void {
    console.log(input);

    inputController(input);
}