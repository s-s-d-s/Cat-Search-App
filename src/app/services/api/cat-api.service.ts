import { Injectable } from '@angular/core';
import { EndpointsConstants } from '@app/constants/endpoints.constant';
import { BaseHttpService } from '@app/services/base-http.service';
import { CatImageModel } from "@app/model/cat-image.model";
import { QueryParams } from "@app/model/query-params.model";
import { Observable } from "rxjs";
import { BreedModel } from "@app/model/breed.model";

@Injectable()
export class CatApiService {
  constructor(
    private baseHttpService: BaseHttpService
  ) {
  }

  getFilteredCats(queryParams?: QueryParams): Observable<CatImageModel[]> {
    const url: string = EndpointsConstants.CATS_IMAGES;
    return this.baseHttpService.doGet<CatImageModel[]>(url, queryParams);
  }

  getAllCatsBreeds(): Observable<BreedModel[]>{
    const url: string = EndpointsConstants.CATS_BREEDS;
    return this.baseHttpService.doGet<BreedModel[]>(url);
  }
}
