import { IInput } from "../../types";

const $ = require("jquery");

export function animationDote(input: IInput) {
    let animation: any = input.animation;
    let itemColor: string = $(input.item).css("color");

    const element = document.createElement("div");
    const dote = document.createElement("span");

    $(element).prop("id", "navimation-box")
    $(element).css({
        position: "absolute",
        bottom: "0",
        width: "0",
        height: "3px",
        transform: "scaleX(0)",
        transition: "0.5s",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        opacity: "0"
    })
    $(element).append(dote);

    $(element).prop("id", "navimation-dote")
    $(dote).css({
        transition: "0.5s",
        width: "5px",
        height: "5px",
        transform: "translateY(10px)",
        background: "red",
        "border-radius": "50%"
    })


    $(input.navbar).css({
        position: "relative"
    })
    $(input.navbar).append(element)

    $(input.item).css({
        transition: "0.5s",
    })


    $(input.item).on(animation.event, function () {
        $(element).css({
            transform: "scaleX(1)",
            width: $(this).outerWidth(),
            left: $(this).offset().left - $(input.navbar).offset().left,
            opacity: "1"
        })

        $(dote).css({
            transform: "translateY(-8px)",
        })

        $(input.item).css({
            color: itemColor,
            transform: "translateY(0)",
        })

        $(this).css({
            color: "red",
            transform: "translateY(-5px)",
        })
    })

    if (animation.event === "mouseenter" || animation.event === "mouseenter") {
        $(input.navbar).on("mouseleave", function () {
            $(element).css({
                transform: "scaleX(0)",
            })

            $(input.item).css({
                color: itemColor,
                transform: "translateY(0)"
            })

            $(dote).css({
                transform: "translateY(10px)",
            })
        })
    }
}