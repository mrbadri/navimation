import { IInput } from "../../types";
import { IAnimation } from "../../types/animation";

const $ = require("jquery");

export function animationController(input: IInput) {
    let animation: any = input.animation;
    
    $("item").on(animation.event, function () {

    })
}