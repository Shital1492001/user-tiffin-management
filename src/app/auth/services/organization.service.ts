import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient,HttpParams } from '@angular/common/http';
import { allOrganization,allOrganizations,Organization } from '../models/organizations';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  baseUrlOrg = environment.apiEndpoint +'/superadmin/organizations/getallOrganization';
  getOrgByIdUrl = environment.apiEndpoint + '/superadmin/organizations/getOrganization';

  constructor(private http:HttpClient) { }
  getAllOrganizationApi(flag: boolean): Observable<allOrganization> {
    const params = new HttpParams().set('status', flag.toString());
    const observableData = this.http.get<allOrganization>(this.baseUrlOrg, {
      params,
    });
    // console.log('jhgj', observableData);
    return observableData;
  }

  getOrganizationById(id: string): Observable<allOrganizations> {
    const observableData = this.http.get<allOrganizations>(
      `${this.getOrgByIdUrl}/${id}`
    );
    return observableData;
  }
}
  
