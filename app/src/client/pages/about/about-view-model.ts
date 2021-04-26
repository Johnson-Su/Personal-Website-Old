import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import "./about-view.scss";
import * as Routes from "../routes";

@template(require("./about-view.html"))
@route(Routes.about)
export class AboutViewModel extends PageViewModel
{
    
}