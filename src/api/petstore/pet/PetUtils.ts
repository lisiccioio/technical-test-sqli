import { Pet, PetCount } from "../../../types/Pet";

export class PetCounter {
    private petData: Pet[];

    constructor(petData: Pet[]) {
        this.petData = petData;
    }

    countPetsWithTheSameName(): PetCount {
        return this.petData.reduce((acc: PetCount, item: Pet) => {
            acc[item.name] = (acc[item.name] || 0) + 1;
            return acc;
        }, {} as PetCount)
    }
}

export async function listPetsWithTheSameName(petData: Pet[]) {
    console.log(new PetCounter(petData).countPetsWithTheSameName());
}
