import { Locator, type Page } from '@playwright/test';

export class GooglePage {
    private readonly page: Page;
    private readonly url: string = "https://www.google.com/?hl=en";
    private readonly searchField: Locator;
    private readonly rejectCookiesButton: Locator;
    private readonly acceptCookiesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByTitle("Search");
        this.rejectCookiesButton = page.getByRole("button").getByText("Reject all");
        this.acceptCookiesButton = page.getByRole("button").getByText("Accept all");

    }

    async getPage(): Promise<Page> {
        return this.page;
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    async acceptCookies() {
        if(await this.acceptCookiesButton.isVisible()) {
        await this.acceptCookiesButton.click();
        }
    }

    async rejectCookies() {
        await this.rejectCookiesButton.click();
    }

    async search(request: string): Promise<void> {
        await this.searchField.fill(request);
        await this.page.keyboard.press("Enter");
        
    }

    async searchForLinkAndClick(): Promise<void> {
        await this.page.locator(`a[href='https://en.wikipedia.org/wiki/Automation']`).first().click();
    }
}
