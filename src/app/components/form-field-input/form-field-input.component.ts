import { Component, EventEmitter, OnInit, Output }  from "@angular/core";
import { FormControl } from "@angular/forms";
import { BaseUnsubscribeComponent } from "../base-unsubscribe/base-unsubscribe.component";
import { takeUntil } from "rxjs";
import { ValidatorsService } from "@app/validators/validators.service";

@Component({
  selector: 'form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss'],
})
export class FormFieldInputComponent extends BaseUnsubscribeComponent implements OnInit {
  readonly defaultPhotoLimit: number = 10;

  photoLimit: FormControl = new FormControl(this.defaultPhotoLimit, [
    this.validatorsService.required(),
    this.validatorsService.aboveZero(),
  ]);

  @Output() changed: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private validatorsService: ValidatorsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.photoLimit.valueChanges.pipe(takeUntil(this.destroyed)).subscribe(() => this.changed.emit(this.photoLimit.value));
  }
}
