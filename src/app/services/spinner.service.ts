import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SpinnerService {
  isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadingMap: Map<string, boolean> = new Map<string, boolean>();

  setLoading(loading: boolean, url: string): void {
    if (loading) {
      this.loadingMap.set(url, loading);
      this.isLoadingSubject.next(true);
    }

    if (!loading && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }

    if (!this.loadingMap.size) {
      this.isLoadingSubject.next(false);
    }
  }
}
