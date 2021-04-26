import { AboutViewModel } from "./about/about-view-model";
import { StartViewModel } from "./start/start-view-model";
import { WorkViewModel } from "./work/work-view-model";

export const pages: Array<Function> = [
    StartViewModel,
    WorkViewModel,
    AboutViewModel
];