import { test, expect } from '../../api/fixtures';
import { STATUS_CODES } from '../../api/common/constants';

const USER_IDS = {
  existing: 1,
};

let user: any;
let updatedUser: any;

test.describe.serial('DummyJson - API Chaining Flow', () => {

  test('GET the existing user', async ({ dummyUsersApi }) => {
    const response = await dummyUsersApi.getUser(USER_IDS.existing);
    expect(response.status()).toBe(STATUS_CODES.ok);

    user = await response.json();
    expect(user).toHaveProperty('id', USER_IDS.existing);
  });

  test('UPDATE the user', async ({ dummyUsersApi }) => {
    const response = await dummyUsersApi.updateUser(USER_IDS.existing, {
      firstName: 'Chained',
      lastName: 'User',
      age: user.age + 1,
    });

    expect(response.status()).toBe(STATUS_CODES.ok);

    updatedUser = await response.json();
    expect(updatedUser.firstName).toBe('Chained');
    expect(updatedUser.age).toBe(user.age + 1);
  });

  test('SEARCH the users', async ({ dummyUsersApi }) => {
    const response = await dummyUsersApi.searchUsers('Emily');
    expect(response.status()).toBe(STATUS_CODES.ok);

    const body = await response.json();
    // expect(Array.isArray(body.users)).toBeTruthy();
    // expect(body.users.length).toBeGreaterThan(0);
    expect(body).toHaveProperty('users');
  });

  test('DELETE the user', async ({ dummyUsersApi }) => {
    const response = await dummyUsersApi.deleteUser(USER_IDS.existing);
    expect(response.status()).toBe(STATUS_CODES.ok);

    const deletedBody = await response.json();
    expect(deletedBody.isDeleted).toBe(true);
    expect(deletedBody.deletedOn).toBeTruthy();
  });
});
