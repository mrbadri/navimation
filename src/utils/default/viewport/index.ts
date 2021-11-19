import { IViewport } from "../../../types/viewport";

export function viewportDefault(viewport: (IViewport | boolean)): (IViewport | boolean) {
    let initialState: IViewport = { type: "default" },
        newViewport: any = viewport;

    if (!newViewport && newViewport !== false) {
        newViewport = initialState;
    } else {
        if (newViewport === "false" || newViewport === false)
            return false;

        if (!newViewport.type)
            newViewport.type = initialState.type;
    }


    return newViewport;
}