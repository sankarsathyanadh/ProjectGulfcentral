import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
  import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routes } from './app.routes';




export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }

  ]
};
