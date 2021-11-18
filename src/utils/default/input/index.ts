import { IInput } from "../../../types";
import { animationDefault } from "../animation";

const _ = require('lodash');

export function inputDefault(input: IInput): IInput {
    let newInput = _.cloneDeep(input);

    newInput.animation = animationDefault(newInput.animation);

    return newInput;
}
