import { Page } from "@playwright/test";
import { GooglePage } from "./GooglePage";
import { WikiPage } from "./WikiPage";

export class PageFactory {
    private readonly page: Page
    readonly googlePage: GooglePage
    readonly wikiPage: WikiPage

    constructor(page: Page) {
        this.page = page;
        this.googlePage = new GooglePage(page);
        this.wikiPage = new WikiPage(page);
    }
}
