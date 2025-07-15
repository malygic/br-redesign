import { LanguageConfig, SupportedLanguage } from '../types';

export const supportedLanguages: LanguageConfig[] = [
  {
    code: 'cs',
    name: 'Čeština',
    nativeName: 'Čeština',
    flag: '🇨🇿',
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'uk',
    name: 'Українська',
    nativeName: 'Українська',
    flag: '🇺🇦',
  },
];

export const defaultLanguage: SupportedLanguage = 'cs';

export function getLanguageConfig(code: SupportedLanguage): LanguageConfig | undefined {
  return supportedLanguages.find(lang => lang.code === code);
}

export function isValidLanguage(code: string): code is SupportedLanguage {
  return supportedLanguages.some(lang => lang.code === code);
}