import { APIResponse, expect } from '@playwright/test';
import { test } from '../src/fixtures';
import { listPetsWithTheSameName } from '../src/api/petstore/pet/PetUtils';
import { User, UserCreateResponse } from '../src/types/User';
import { Pet } from '../src/types/Pet';

test('Create your user through an HTTP request and then retrieve its data by calling the corresponding service', async ({ userApi }) => {
  const userName = "kisun";

  await test.step('Create your user through an HTTP request', async () => {
    const createUserResponse = await userApi.createUser({
      id: 0,
      username: `${userName}`,
      firstName: "koshka",
      lastName: "kartoshka",
      email: "koshka@google.com",
      password: "meow",
      phone: "1234567890",
      userStatus: 0
    });
    expect(createUserResponse).toBeOK();
    expect(createUserResponse.status()).toBe(200);
    const userID = ((await createUserResponse.json()) as UserCreateResponse).message;
    expect(Number.parseInt(userID)).toBeGreaterThan(0);
  })


  await test.step('Retrieve its data by calling the corresponding service', async () => {
    const getUserResponse = await userApi.getUserByUserName(userName);
    expect(getUserResponse).toBeOK();
    expect(getUserResponse.status()).toBe(200);
    expect(((await getUserResponse.json()) as User).username).toBe(userName);
  })
})

test('Collect the JSON returned by the endpoint /pet/findByStatus, and list the names of the pets that have been sold', async ({ petApi }) => {
  let soldPetsResponse: APIResponse;

  await test.step('Collect the JSON returned by the endpoint /pet/findByStatus', async () => {
    soldPetsResponse = await petApi.findPetByStatus('sold');
    expect(soldPetsResponse).toBeOK();
    expect(soldPetsResponse.status()).toBe(200);
  })

  await test.step('List the names of the pets that have been sold', async () => {
    petApi.listPets((await soldPetsResponse.json() as Pet[]));
  })
})

test('Create a class whose constructor requires the earlier data structure and implement a method that can iterate through it to identify how many pets share the same name', async ({ petApi }) => {
  const soldPetsResponse = await petApi.findPetByStatus('sold');
  expect(soldPetsResponse).toBeOK();
  expect(soldPetsResponse.status()).toBe(200);
  listPetsWithTheSameName((await soldPetsResponse.json() as Pet[]));
})