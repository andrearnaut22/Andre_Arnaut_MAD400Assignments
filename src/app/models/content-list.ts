import { IContent } from "./icontent";

export class ContentList {
    private martialArt: IContent[];
    constructor() {
        this.martialArt = [];
    }
    get martialArt(): IContent[]{
        return this.martialArt;
    }

    addContent(martialArt: IContent){
        this.martialArt.push(martialArt);
    }
}
