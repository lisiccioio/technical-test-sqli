export interface Pet {
    id: number,
    category: { id: number, name: string },
    name: string,
    photoUrls: [string],
    tags: [{ id: number, name: string }],
    status: PetStatus
}

export interface Item { id: number, name: string };

export type PetStatus = 'available' | 'pending' | 'sold';

export interface PetCount {
    [key: string]: number
}
