import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationInEng from '../locales/en/translation.json';
import translationInHindi from '../locales/hi/translation.json';
import translationInMarathi from '../locales/mr/translation.json';
import translationInGujrati from '../locales/gu/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationInEng },
      hi: { translation: translationInHindi },
      mr: { translation: translationInMarathi },
      gu: { translation: translationInGujrati },
    },
    lng: 'en',               
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
