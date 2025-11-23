import { Locale } from '@/i18n/translations';

export function getLocalePath(path: string, locale: Locale): string {
  return locale === 'en' ? path : `/${locale}${path}`;
}

