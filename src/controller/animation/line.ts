import { IInput } from "../../types";

const $ = require("jquery");

export function animationLine(input: IInput) {
    let animation: any = input.animation;

    const element = document.createElement("div");

    $(element).prop("id", "navimation")
    $(element).css({
        position: "absolute",
        bottom: "0", 
        width: "0",
        height: "3px",
        background: "red",
        transform: "scaleX(0)",
        transition: "0.5s"
    })

    $(input.navbar).css({
        position: "relative"
    })
    $(input.navbar).append(element)


    $(input.item).on(animation.event, function () {
        $(element).css({
            transform: "scaleX(1)",
            width: $(this).outerWidth(),
            left: $(this).offset().left - $(input.navbar).offset().left ,
        })
    })

    if(animation.event === "mouseenter" || animation.event === "mouseenter"){
        $(input.navbar).on("mouseleave", function () {
            $(element).css({
                transform: "scaleX(0)",
            })
        })
    }
}