// baseApi.ts (mock-enabled)
import { APIRequestContext, APIResponse } from '@playwright/test';

const USE_MOCK = process.env.USE_MOCK === 'true';

export abstract class BaseApi {
  constructor(protected request: APIRequestContext, protected baseUrl: string) { }

  private mockResponse(path: string, method: string, data?: any): APIResponse {
    console.log(`⚡ Using mock response: ${method} ${path}`);

    let body: any;
    let statusCode = 200;

    if (method === 'GET' && path === '/users') {
      body = [
        { id: 1, name: 'Mock User 1', username: 'mockuser1', email: 'mock1@example.com' },
        { id: 2, name: 'Mock User 2', username: 'mockuser2', email: 'mock2@example.com' }
      ];
    } else if (method === 'GET' && path.startsWith('/users/search')) {
      body = {
        users: [
          { id: 1, firstName: 'Emily', lastName: 'Mock', username: 'emilymock', email: 'emily.mock@example.com' },
          { id: 2, firstName: 'Emily', lastName: 'Johnson', username: 'emjay', email: 'emily.j@example.com' }
        ],
        total: 2,
        skip: 0,
        limit: 2
      };
    } else if (method === 'GET' && path.startsWith('/users/')) {
      body = { id: 1, name: 'Mock User', username: 'mockuser', email: 'mock@example.com' };
    } else if (method === 'POST' && path === '/users') {
      statusCode = 201; // ✅ Fix: match created
      body = { id: 101, ...data };
    } else if (method === 'PUT' && path.startsWith('/users/')) {
      body = { id: 1, ...data };
    } else if (method === 'PATCH' && path.startsWith('/users/')) {
      body = { id: 1, ...data };
    } else if (method === 'DELETE' && path.startsWith('/users/')) {
      body = { isDeleted: true, deletedOn: new Date().toISOString() };
    } else {
      body = { message: `Mock ${method} ${path}`, data };
    }

    return {
      status: () => statusCode,
      ok: () => true,
      json: async () => body,
      text: async () => JSON.stringify(body),
      headers: () => new Map(),
      url: () => `${this.baseUrl}${path}`,
      body: () => Buffer.from(JSON.stringify(body))
    } as unknown as APIResponse;
  }

  protected async get(path: string, headers?: Record<string, string>): Promise<APIResponse> {
    if (USE_MOCK) return this.mockResponse(path, 'GET');
    return this.request.get(`${this.baseUrl}${path}`, { headers });
  }

  protected async post(path: string, data?: object, headers?: Record<string, string>): Promise<APIResponse> {
    if (USE_MOCK) return this.mockResponse(path, 'POST', data);
    return this.request.post(`${this.baseUrl}${path}`, { data, headers });
  }

  protected async put(path: string, data?: object, headers?: Record<string, string>): Promise<APIResponse> {
    if (USE_MOCK) return this.mockResponse(path, 'PUT', data);
    return this.request.put(`${this.baseUrl}${path}`, { data, headers });
  }

  protected async patch(path: string, data?: object, headers?: Record<string, string>): Promise<APIResponse> {
    if (USE_MOCK) return this.mockResponse(path, 'PATCH', data);
    return this.request.patch(`${this.baseUrl}${path}`, { data, headers });
  }

  protected async delete(path: string, headers?: Record<string, string>): Promise<APIResponse> {
    if (USE_MOCK) return this.mockResponse(path, 'DELETE');
    return this.request.delete(`${this.baseUrl}${path}`, { headers });
  }
}
