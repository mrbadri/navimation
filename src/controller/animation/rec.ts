import { IInput } from "../../types";

const $ = require("jquery");

export function animationRec(input: IInput) {
    let animation: any = input.animation;

    const element = document.createElement("div");

    $(element).prop("id", "navimation")
    $(element).css({
        position: "absolute",
        bottom: "0",
        top: "0",
        width: "0",
        height: "auto",
        background: "red",
        transition: "0.5s",
        "z-index": "1"
    })

    $(input.navbar).css({
        position: "relative"
    })
    $(input.navbar).append(element)

    $(input.item).css({
        "z-index": "2"
    })

    $(input.item).on(animation.event, function () {
        $(element).css({
            width: $(this).outerWidth(),
            left: $(this).offset().left - $(input.navbar).offset().left,
        })
    })

    if (animation.event === "mouseenter" ) {
        $(input.navbar).on("mouseleave", function () {
            $(element).css({
                width: "0"
            })
        })
    }
}