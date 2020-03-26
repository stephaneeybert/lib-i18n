import { NgModule } from '@angular/core';
import { I18nModule } from './i18n.module';
import { TranslateModule } from '@ngx-translate/core';

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
