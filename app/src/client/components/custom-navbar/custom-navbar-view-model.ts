import { ComponentViewModel, element, NavigationService, template } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import * as Routes from "../../pages/routes";
import "./custom-navbar-view.scss";

@template(require("./custom-navbar-view.html"))
@element("custom-navbar")
@inject("NavigationService")
export class CustomNavbarViewModel extends ComponentViewModel
{
    private readonly _navigationService: NavigationService;
    
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        given(navigationService, "NavigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    
    
    public gotoStart(): void
    {
        this._navigationService.navigate(Routes.start);
    }
    
    public gotoWork(): void
    {
        this._navigationService.navigate(Routes.work);
    }
    
    public gotoAbout(): void
    {
        this._navigationService.navigate(Routes.about);
    }
}