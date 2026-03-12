import { expect } from '@playwright/test';
import { test } from '../src/fixtures';

test('Web automation test', async ({ pages }) => {

    await test.step('Search for the word \"automation\" on Google', async () => {
        await pages.googlePage.goto();
        await pages.googlePage.acceptCookies();
        await pages.googlePage.search('automation');
        expect(await pages.googlePage.getPage()).toHaveURL(/\/search\?q=automation/);
    })

    await test.step('Find the resulting Wikipedia link', async () => {
        await pages.googlePage.searchForLinkAndClick();
        expect(await pages.wikiPage.getPage()).toHaveURL(/wikipedia.org\/wiki\/Automation/);
    })

    await test.step('Check the year in which the first automatic process was done', async () => {
        expect(await pages.wikiPage.getContent()).toHaveText(/1624/);
    })

    await test.step('Take a screenshot of the Wikipedia page', async () => {
        await pages.wikiPage.takeScreenshot();
    })

})
