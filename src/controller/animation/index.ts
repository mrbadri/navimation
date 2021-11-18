import { IInput } from "../../types";
import { IAnimation } from "../../types/animation";
import { animationLine } from "./line";

const $ = require("jquery");

export function animationController(input: IInput) {
    let animation: any = input.animation;

    if (animation.type === "line") {
        animationLine(input);
    }
}