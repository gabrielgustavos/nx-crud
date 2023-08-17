import { OverlayRef } from "@angular/cdk/overlay";
import { Observable, Subject } from "rxjs";

export class LoaderRef {
  private afterClosedSubject = new Subject<any>();

  /**
   *
   */
  constructor(private overlayRef: OverlayRef) {

  }

  public close(result?: any) {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }

  public afterClosed(): Observable<any> {
    return this.afterClosedSubject.asObservable();
  }

  public backdropClick(): Observable<any> {
    return this.overlayRef.backdropClick();
  }
}