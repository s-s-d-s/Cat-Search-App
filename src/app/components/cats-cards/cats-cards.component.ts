import { Component, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CatImageModel } from "@app/model/cat-image.model";

@Component({
  selector: 'cats-cards',
  templateUrl: './cats-cards.component.html',
  styleUrls: ['./cats-cards.component.scss'],
})
export class CatsCardsComponent {
  @Input() catsSubject: BehaviorSubject<CatImageModel[]> = new BehaviorSubject<CatImageModel[]>([]);
}
