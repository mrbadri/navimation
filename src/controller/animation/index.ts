import { IInput } from "../../types";
import { IAnimation } from "../../types/animation";
import { animationDote } from "./dote";
import { animationLine } from "./line";
import { animationRec } from "./rec";

const $ = require("jquery");

export function animationController(input: IInput) {
    let animation: any = input.animation;

    if (animation.type === "line")
        animationLine(input);

    if (animation.type === "rec")
        animationRec(input);

    if (animation.type === "dote")
        animationDote(input);
}