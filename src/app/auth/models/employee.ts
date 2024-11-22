export interface LoginResponse{
    message:string;
    role_id:string;
    statusCode:number;
    success:true;
    token:string;
    _id:string;
}
export interface Login{
    email:string;
    password:string;
}
interface RoleDetails {
  organization_id: string;
  org_location: string;
  approval_status: string;
}

export interface Employee{
  username: string;
  password: string;
  email: string;
  contact_number: string;
  address: string;
  role_id: string;
  employee_id:string;
  role_specific_details: RoleDetails;
  _id: string;

}


export interface EmployeeRegister{
  message: string;
  statusCode: number;
  _id: string;
  token: string;


}