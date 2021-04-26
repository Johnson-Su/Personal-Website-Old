import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import "./work-view.scss";
import * as Routes from "../routes";

@template(require("./work-view.html"))
@route(Routes.work)
export class WorkViewModel extends PageViewModel
{
    
}