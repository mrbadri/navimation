import { IViewport } from "../../../types/viewport";

const _ = require('lodash');

export function viewportDefault(viewport: IViewport): IViewport {
    let initialState: IViewport = { type: "descktop" },
        newViewport: IViewport = _.cloneDeep(viewport);

    if (!viewport) {
        newViewport = initialState;
    } else {
        if (!viewport.type)
            newViewport.type = initialState.type;
    }


    return newViewport;
}