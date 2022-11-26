import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BaseUnsubscribeComponent } from "./components/base-unsubscribe/base-unsubscribe.component";
import { SpinnerService } from "@app/services/spinner.service";
import { takeUntil } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseUnsubscribeComponent implements OnInit {
  isSpinnerVisible: boolean = false;

  constructor(
    private spinnerService: SpinnerService,
    private changeDetector: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit(): void {
    this.spinnerService.isLoadingSubject.pipe(takeUntil(this.destroyed)).subscribe(isLoading => {
      this.isSpinnerVisible = isLoading;
      this.changeDetector.detectChanges();
    });
  }
}
