import { IAnimation } from "../../../types/animation";

const _ = require('lodash');

export function animationDefault(animation: (IAnimation | boolean)): (IAnimation | boolean) {
    let initialState: (IAnimation) = { type: "line", event: "mouseenter" },
        newAnimation: (IAnimation) = _.cloneDeep(animation);

    if (!newAnimation && newAnimation !== false) {
        newAnimation = initialState;
    } else {
        if (newAnimation === "false" || newAnimation === false)
            return false;

        if (!newAnimation.type)
            newAnimation.type = initialState.type;

        if (!newAnimation.event)
            newAnimation.event = initialState.event;
    }

    return newAnimation;
}