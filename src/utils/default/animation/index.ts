import { IAnimation } from "../../../types/animation";

export function animationDefault(animation: (IAnimation | boolean)): (IAnimation | boolean) {
    let initialState: (IAnimation) = { type: "line", event: "mouseenter" },
        newAnimation: any = animation

    if (!newAnimation && newAnimation !== false) {
        newAnimation = initialState;
    } else {
        if (newAnimation === "false" || newAnimation === false)
            return false;

        if (!newAnimation.type)
            newAnimation.type = initialState.type;

        if (!newAnimation.event) {
            if (newAnimation.type === initialState.type)
                newAnimation.event = initialState.event;
            if (newAnimation.type === "rec")
                newAnimation.event = "click";
        }

    }

    return newAnimation;
}