import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule, isPlatformServer } from '@angular/common';

@Component({
  selector: 'control-flow-deferred',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deferred.component.html',
  styleUrl: './deferred.component.css',
})
export class DeferredComponent {
  public justOnServer = new BehaviorSubject<boolean>(false);
  public justOnClient = new BehaviorSubject<boolean>(false);
  public title = '';
  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    if (isPlatformServer(this.platformId)) {
      this.justOnServer.next(true);
      this.justOnClient.next(false);
    } else {
      this.justOnServer.next(false);
      this.justOnClient.next(true);
    }
  }
}
