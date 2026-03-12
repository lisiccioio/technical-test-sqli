import { Locator, type Page } from '@playwright/test';

export class WikiPage {
    private readonly page: Page;
    private readonly url: string = "https://es.wikipedia.org/wiki/Automation";
    private readonly content: Locator;

    constructor(page: Page) {
        this.page = page;
        this.content = page.locator('#content');
    }
    
    async getPage(): Promise<Page> {
        return this.page;
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    async takeScreenshot(): Promise<void> {
        await this.page.screenshot({
            path: `./screenshots/wikipedia.${Date.now()}.png`,
        })
    }

    async getContent(): Promise<Locator> {
        return this.content;
    }
}