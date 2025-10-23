import { test as base } from '@playwright/test';
import { PetApi } from './api/petstore/pet/PetApiMethods';
import { UserApi } from './api/petstore/user/UserApiMethods';
import { PageFactory } from './pages/PageFactory';

type MyFixtures = {
    pages: PageFactory;
    petApi: PetApi;
    userApi: UserApi;
};

export const test = base.extend<MyFixtures>({
    pages: async ({ page }, use) => {
        await use(new PageFactory(page));
    },
    petApi: async ({ request }, use) => {
        await use(new PetApi(request));
    },
    userApi: async ({ request }, use) => {
        await use(new UserApi(request));
    },
});
