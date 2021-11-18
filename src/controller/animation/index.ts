import { IInput } from "../../types";
import { IAnimation } from "../../types/animation";

const $ = require("jquery");

export function animationController(input: IInput) {
    let animation: any = input.animation;

    const element = document.createElement("div");
    
    $(element).prop("id", "navimation")
    $(element).css({
        width: "100px",
        height: "2px",
        background: "red",
        position: "absolute"
    })

    $(input.navbar).css({
        position: "relative"
    })
    $(input.navbar).append(element)

    console.log(element);

    $("item").on(animation.event, function () {

    })
}