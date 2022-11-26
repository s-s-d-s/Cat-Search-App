import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BreedModel } from "../model/breed.model";
import { CatApiService } from "@app/services/api/cat-api.service";

@Injectable()
export class CatsBreedsResolver implements Resolve<BreedModel[]> {
  constructor(private catApiService: CatApiService) {
  }

  resolve(): Observable<BreedModel[]> {
    return this.catApiService.getAllCatsBreeds();
  }
}
