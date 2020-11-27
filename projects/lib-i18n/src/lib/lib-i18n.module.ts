import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { I18nModule } from './i18n.module';

@NgModule({
  declarations: [],
  imports: [
    I18nModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class LibI18nModule { }
