import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { SelectItemModel } from "@app/model/select-item.model";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { BreedModel } from "@app/model/breed.model";
import { FormControl } from "@angular/forms";
import { takeUntil } from "rxjs";
import { BaseUnsubscribeComponent } from "../base-unsubscribe/base-unsubscribe.component";

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent extends BaseUnsubscribeComponent implements OnInit {
  readonly defaultCatsBreeds: string = '';
  catsBreeds: BreedModel[] = this.route.snapshot.data['breeds'];
  selectedBreed: FormControl = new FormControl();

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  readonly allCatsBreedsSelectItem: SelectItemModel = {
    name: this.translateService.instant('catBreedValues.all'),
    value: this.defaultCatsBreeds,
  }

  readonly catsBreedSelectItems: SelectItemModel[] = [
    this.allCatsBreedsSelectItem,
    ...this.catsBreeds.map(breed => ({
      name: breed.name,
      value: breed.id
    }))
  ];

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.selectedBreed.setValue(this.allCatsBreedsSelectItem.value);
    this.selectedBreed.valueChanges.pipe(takeUntil(this.destroyed)).subscribe(() => this.selected.emit(this.selectedBreed.value));
  }

}
