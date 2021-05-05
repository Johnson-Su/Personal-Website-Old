import { PageViewModel, template, route, components } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import { ContactMeViewModel } from "./components/contact-me/contact-me-view-model";
import { MyCurrentStatusViewModel } from "./components/content/my-current-status-view-model";
import { IntroViewModel } from "./components/intro/intro-view-model";
import { ProjectCardViewModel } from "./components/project-card/project-card-view-model";
import "./start-view.scss";


@template(require("./start-view.html")) // path to the template
@route(Routes.start) // route that the page is going to be shown at
@components(ProjectCardViewModel, IntroViewModel, MyCurrentStatusViewModel, ContactMeViewModel)
export class StartViewModel extends PageViewModel
{
    public get imagePilly(): string { return require("./Projects/Pilly/pilly.png"); }
    public get imagePillyLarge(): string { return require("./Projects/Pilly/largepillymobile.png"); }

    public get imageStegHide(): string { return require("./Projects/StegHide/steghide.png"); }
    public get imageStegHideLarge(): string { return require("./Projects/StegHide/largesteghidemobile.png"); }

    public get imageVibeCheck(): string { return require("./Projects/VibeCheck/vibecheck.png"); }
    public get imageVibeCheckLarge(): string { return require("./Projects/VibeCheck/largevibecheckmobile.png"); }

    public get imageCertiChain(): string { return require("./Projects/Certi-Chain/largecertichain.png"); }
    public get imageCertiChainLarge(): string { return require("./Projects/Certi-Chain/largecertichainmobile.png"); }

    public get imagePlanty(): string { return require("./Projects/Planty/planty.png"); }
    public get imagePlantyLarge(): string { return require("./Projects/Planty/largeplanty.png"); }

    public get imageFarmily(): string { return require("./Projects/Farmily/largefarmilymobile.png"); }

    public get imagePersonalSite(): string { return require("./Projects/Website/largewebsitemobile.png"); }
}