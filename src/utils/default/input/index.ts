import { IInput } from "../../../types";
import { animationDefault } from "../animation";
import { viewportDefault } from "../viewport";

const _ = require('lodash');

export function inputDefault(input: IInput): IInput {
    let newInput = _.cloneDeep(input);

    newInput.animation = animationDefault(input.animation);
    newInput.viewport = viewportDefault(input.viewport);

    return newInput;
}
