import { Component, ViewChild } from "@angular/core";
import { BehaviorSubject, takeUntil } from "rxjs";
import { CatImageModel } from "@app/model/cat-image.model";
import { CatApiService } from "@app/services/api/cat-api.service";
import { QueryParams } from "@app/model/query-params.model";
import { BaseUnsubscribeComponent } from "../components/base-unsubscribe/base-unsubscribe.component";
import { FormFieldInputComponent } from "../components/form-field-input/form-field-input.component";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseUnsubscribeComponent {
  @ViewChild(FormFieldInputComponent) formFieldInputComponent?: FormFieldInputComponent;

  readonly defaultCatsBreeds: string = '';
  readonly defaultPhotoLimit: number = 10;

  catsSubject: BehaviorSubject<CatImageModel[]> = new BehaviorSubject<CatImageModel[]>([]);

  selectedCatsBreed: string = this.defaultCatsBreeds;
  photoLimit: number = this.defaultPhotoLimit;

  constructor(
    private catApiService: CatApiService,
  ) {
    super();
  }

  searchCats(): void {
    if (this.formFieldInputComponent?.photoLimit.invalid) return;
    const queryParams: QueryParams = { limit: this.photoLimit, breedIds: this.selectedCatsBreed };
    this.catApiService.getFilteredCats(queryParams).pipe(takeUntil(this.destroyed)).subscribe(catsImages => {
      this.catsSubject.next(catsImages)
    });
  }

  onBreedSelected(id: string): void {
    this.selectedCatsBreed = id;
  }

  onPhotoLimitChanged(limit: number): void {
    this.photoLimit = limit;
  }
}
