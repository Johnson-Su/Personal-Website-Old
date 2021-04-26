import { PageViewModel, template, route, components } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import { ProjectCardViewModel } from "./components/project-card/project-card-view-model";
import "./start-view.scss"; 


@template(require("./start-view.html")) // path to the template
@route(Routes.start) // route that the page is going to be shown at
@components(ProjectCardViewModel)
export class StartViewModel extends PageViewModel
{
    public get imagePilly(): string { return require("./Projects/Pilly/pilly.png"); }
    public get imagePillyLarge(): string { return require("./Projects/Pilly/largepillymobile.png"); }
    
    public get imageStegHide(): string { return require("./Projects/StegHide/steghide.png"); }
    public get imageStegHideLarge(): string { return require("./Projects/StegHide/largesteghidemobile.png"); }
}