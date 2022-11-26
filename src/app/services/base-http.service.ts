import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryParams } from "@app/model/query-params.model";
import { QueryParamsConstants } from "@app/constants/query-params.constants";

@Injectable()
export class BaseHttpService {
  constructor(
    private http: HttpClient,
  ) {
  }

  doGet<T>(url: string, queryParams?: QueryParams): Observable<T> {
    return this.http.get<T>(url, { params: this.getHttpParams(queryParams) });
  }

  private getHttpParams(queryParams: QueryParams | undefined): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    if (queryParams?.limit) {
      httpParams = httpParams.append(QueryParamsConstants.limit, queryParams.limit);
    }
    if (queryParams?.breedIds) {
      httpParams = httpParams.append(QueryParamsConstants.breedIds, queryParams.breedIds);
    }
    return httpParams;
  }
}
