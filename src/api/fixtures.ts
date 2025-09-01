import { test as base, expect, APIRequestContext } from '@playwright/test';
import { JsonPlaceholderUsersApi } from './apis/jsonplaceholder/usersApi';
import { DummyJsonUsersApi } from './apis/dummyjson/usersApi';
import { BASE_URLS } from './common/endpoints';

type ApiFixtures = {
  jsonUsersApi: JsonPlaceholderUsersApi;
  dummyUsersApi: DummyJsonUsersApi;
};

// Extend Playwright's test with our API clients
export const test = base.extend<ApiFixtures>({
  jsonUsersApi: async ({ request }, use) => {
    await use(new JsonPlaceholderUsersApi(request, BASE_URLS.jsonplaceholder));
  },

  dummyUsersApi: async ({ request }, use) => {
    await use(new DummyJsonUsersApi(request, BASE_URLS.dummyjson));
  }
});

export { expect };
