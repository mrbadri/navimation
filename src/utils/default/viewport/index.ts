import { IViewport } from "../../../types/viewport";

const _ = require('lodash');

export function viewportDefault(viewport: (IViewport | boolean)): (IViewport | boolean) {
    let initialState: IViewport = { type: "default" },
        newViewport: IViewport = _.cloneDeep(viewport);

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