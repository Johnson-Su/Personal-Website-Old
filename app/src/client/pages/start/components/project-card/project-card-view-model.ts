import { bind, ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import "./project-card-view.scss";

@template(require("./project-card-view.html"))
@element("project-card")
@bind("image", "imageLarge", "title", "description", "languages", "tools", "ongoing", "projectNumber")
export class ProjectCardViewModel extends ComponentViewModel
{
    
}