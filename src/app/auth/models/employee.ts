export interface LoginResponse{
    message:string;
    role_id:string;
    statusCode:number;
    success:true;
    token:string;
    refreshToken:string,
    _id:string;
}
export interface Login{
    email:string;
    password:string;
}
