import { IAnimation } from "./animation";
import { IViewport } from "./viewport";

export interface IInput {
    navbar: string,
    item: string,
    animation?: IAnimation,
    viewport?: IViewport 
}