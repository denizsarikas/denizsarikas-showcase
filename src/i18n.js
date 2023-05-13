import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';



// const resources = {
//     tr: {
//         translation: {
//             welcome: 'Hosgeldiniz'
//         }
//     },
//     en: {
//         translation: {
//             welcome: 'Welcome'
//         }
//     }
// }

i18n
  .use(initReactI18next)
  .use(Backend)
   .use(LanguageDetector)
  .init({

    fallbackLng: 'tr',
    // backend: {
    //     loadPath: 'http://ornekapi/{{lng}}'
    // }

    // lng: 'tr',
    // resources

  });

  export default i18n;