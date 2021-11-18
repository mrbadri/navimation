import { IAnimation } from "../../../types/animation";

const _ = require('lodash');

export function animationDefault(animation: IAnimation): IAnimation {
    let initialState: IAnimation = { type: "line" },
        newAnimation = _.cloneDeep(animation);
        
    if (!animation) {
        newAnimation = initialState;
    } else {
        if (!animation.type)
            newAnimation.type = initialState.type;
    }

    return newAnimation;
}