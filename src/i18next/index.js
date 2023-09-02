import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import fa from './fa';
import arabic from "./arabic";
import { getCookie } from "../dataService/cookieProvider";

const defaultLanguage = getCookie("language");

i18n.use(initReactI18next).init({
     resources: {
      en: {
        ...en
      },
      fa: {
        ...fa
      },
      arabic : {
        ...arabic
      }
    },
    lng: defaultLanguage, 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });