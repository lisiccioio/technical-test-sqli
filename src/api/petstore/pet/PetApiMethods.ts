import { APIRequestContext, APIResponse } from "@playwright/test";
import { Item, Pet, PetStatus } from "../../../types/Pet";

export class PetApi {
    private readonly request: APIRequestContext;
    private readonly apiUrl = 'https://petstore.swagger.io/v2/pet';
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async findPetByStatus(status: PetStatus): Promise<APIResponse> {
        const soldPetsResponse: APIResponse = await this.request.get(`${this.apiUrl}/findByStatus?status=${status}`);
        return soldPetsResponse;
    }

    async listPets(petData: Pet[]): Promise<void> {
        const soldPetsArray = petData.reduce((acc: Item[], item: Pet) => {
            acc.push({ id: item.id, name: item.name });
            return acc;
        }, [] as Item[]);

        console.log(soldPetsArray);
    }
}
