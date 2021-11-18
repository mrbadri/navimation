import { IAnimation } from "./animation";
import { IViewport } from "./viewport";
export interface IInputs {
    navbar: string,
    item: string,
    animation?: IAnimation,
    viewport?: IViewport 
}