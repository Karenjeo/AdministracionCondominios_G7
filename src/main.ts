<<<<<<< HEAD
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

=======
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
>>>>>>> 8039ec33c34e03ac266a84969bef9d2519c59607

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
