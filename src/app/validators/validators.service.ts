import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidationError } from "@app/model/validation-error.model";

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  constructor(private translateService: TranslateService) {
  }

  required(): ValidatorFn {
    return (control: AbstractControl): ValidationError | null => {
      if (!control.value) {
        return { message: this.translateService.instant('errors.validation.required') };
      }
      return null;
    }
  }

  aboveZero(): ValidatorFn {
    return (control: AbstractControl): ValidationError | null => {
      if (control.value && control.value <= 0) {
        return { message: this.translateService.instant('errors.validation.aboveZero') }
      }
      return null;
    }
  }
}
