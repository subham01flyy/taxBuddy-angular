// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PlanService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private apiUrl = 'https://dummyjson.com/posts'; // API endpoint

  constructor(private http: HttpClient) {}

  createPlan(planData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, planData);
  }
}
