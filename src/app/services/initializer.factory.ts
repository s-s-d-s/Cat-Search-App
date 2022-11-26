import { TranslateService } from '@ngx-translate/core';
import { Languages } from '@app/constants/languages.constant';
import { Observable } from 'rxjs';

export function appInitializerFactory(translate: TranslateService) {
  return (): Observable<void> => translate.use(Languages.EN);
}
