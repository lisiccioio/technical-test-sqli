export interface User {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    userStatus: number
}

export interface UserCreateResponse {
    code: number,
    type: string,
    message: string
}