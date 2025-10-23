import { Locator, type Page } from '@playwright/test';

export class WikiPage {
    private readonly page: Page;
    private readonly url: string = "https://en.wikipedia.org/wiki/Automation";

    constructor(page: Page) {
        this.page = page;
    }


    async getPage(): Promise<Page> {
        return this.page;
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    async isOnPage(text: string): Promise<boolean> {
        return this.page.locator('a').getByText(/`${text}`/) === null ? false : true;
    }

    async takeScreenshot(): Promise<void> {
        await this.page.screenshot({
            path: `./screenshots/wikipedia.${Date.now()}.png`,
        })
    }
}