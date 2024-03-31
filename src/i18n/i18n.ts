import common from './common.json';
import input from './input.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'en',
    resources: {
        en: {
            common,
            input,
        },
    },
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
});

export default 18n;