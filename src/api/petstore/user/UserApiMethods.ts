import { APIRequestContext, APIResponse } from "@playwright/test";
import { User } from "../../../types/User";

export class UserApi {
    request: APIRequestContext;
    apiUrl = 'https://petstore.swagger.io/v2/user';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createUser(user: User): Promise<APIResponse> {
        const response = await this.request.post(this.apiUrl, { data: user });
        return response;
    }

    async getUserByUserName(userName: string): Promise<APIResponse> {
        const response = await this.request.get(`${this.apiUrl}/${userName}`);
        return response;
    }

    async deleteUser(user: User): Promise<APIResponse> {
        const response = await this.request.delete(this.apiUrl, { data: user });
        return response;
    }
}
