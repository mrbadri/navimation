import { IInput } from "../../../types";
import { animationDefault } from "../animation";
import { viewportDefault } from "../viewport";

export function inputDefault(input: IInput): IInput {
    let newInput = input;

    newInput.animation = animationDefault(input.animation);
    newInput.viewport = viewportDefault(input.viewport);

    return newInput;
}
