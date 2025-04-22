import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en/translation.json';
import bn from './locale/bn/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    bn: { translation: bn },
  },
  lng: 'bn', // Default language
  fallbackLng: 'en', // If language is not found, fallback to English
  interpolation: {
    escapeValue: false, // React already escapes strings
  },
});

export default i18n;
