export interface IUser{
    id:string
    displayName:string
    email:string
    token:string
    imageUrl?:string
}


export interface IUserLogin{
    email:string
    password:string
}

export interface IUserRegister{
    displayName:string
    email:string
    password:string
}