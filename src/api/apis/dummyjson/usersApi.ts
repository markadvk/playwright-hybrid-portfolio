import { BaseApi } from '../baseApi';

export class DummyJsonUsersApi extends BaseApi {
  async getUser(id: number, headers?: Record<string, string>) {
    return this.get(`/users/${id}`, headers);
  }

  async updateUser(id: number, user: object, headers?: Record<string, string>) {
    return this.put(`/users/${id}`, user, headers);
  }

  async deleteUser(id: number, headers?: Record<string, string>) {
    return this.delete(`/users/${id}`, headers);
  }

  async searchUsers(query: string, headers?: Record<string, string>) {
    return this.get(`/users/search?q=${query}`, headers);
  }
}
