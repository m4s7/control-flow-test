import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DOCUMENT, isPlatformServer } from '@angular/common';
import { DirectComponent } from '../direct/direct.component';
import { DeferredComponent } from '../deferred/deferred.component';
import { LongRunningComponent } from '../long-running/long-running.component';

@Component({
  standalone: true,
  selector: 'control-flow-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    DirectComponent,
    DeferredComponent,
    LongRunningComponent,
  ],
})
export class AppComponent {
  public title = '';
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DOCUMENT) private document: Document
  ) {
    if (isPlatformServer(this.platformId)) {
      this.title = 'Server';
      console.log('Server');
    } else {
      this.title = 'Client';
      console.log('Client');
    }
    this.document.addEventListener('readystatechange', (event) => {
      console.log('readystatechange', event);
    });
  }
}
