import { Subject } from 'rxjs';
import { Directive, OnDestroy } from '@angular/core';

@Directive()
export class BaseUnsubscribeComponent implements OnDestroy  {
  protected destroyed: Subject<void> = new Subject();

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
