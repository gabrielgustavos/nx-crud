import { Injectable, Injector } from "@angular/core";
import { ComponentType, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from "@angular/cdk/portal";
import { BehaviorSubject, Observable, delay } from "rxjs";
import { LoaderComponent } from "./loader.component";
import { LoaderRef } from "./loader-ref";
@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private overlay: Overlay, private injector: Injector) {
  }

  get loading$(): Observable<boolean> {
    return this.loadingSubject.asObservable().pipe(delay(300));
  }

  aberto(): void {
    this.loadingSubject.next(true);
  }

  fechado(): void {
    this.loadingSubject.next(false);
  }



  open(component: ComponentType<LoaderComponent>): LoaderRef {

    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-loading-backdrop'
    });

    overlayConfig.positionStrategy = positionStrategy;

    const overlayRef = this.overlay.create(overlayConfig);


    const loadingRef = new LoaderRef(overlayRef);

    const injector = Injector.create({
      providers: [
        { provide: LoaderRef, useValue: loadingRef }
      ]
    });

    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return loadingRef;
  }


}
