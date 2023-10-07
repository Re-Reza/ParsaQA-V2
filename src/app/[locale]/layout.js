import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { usePathname } from "next/navigation";
import importBootstrap from "./importBootstrap";
import "../../../public/styles/global.scss";

export const metadata = {
  title: 'پارسا',
  // description: '',
}

export function generateStaticParams() {
  return [
    {locale: 'en'}, 
    {locale: 'fa'},
    {locale: 'ar'},
  ];
}

export default async function LocaleLayout({ children, params : { locale } }) {
  importBootstrap(locale);

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  
  let direction;
  let font;
  switch (locale) {

    case "fa":
      direction = "rtl";
      font = "Vazirmatn FD";
      break;

    case "ar": 
      direction = "rtl";
      font = "NotoSansArabic";
      break;

    case "en":
      direction = "ltr";
      font = "Urbanist_en";
      break;

    default :
      direction = "rtl"
      font = "Vazirmatn FD";
  }


  return (
    <>
    {/* lang="fa-IR" */}
      <html lang={locale} dir={direction} style={{ fontFamily : font }}>
        <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </body>
      </html>
    </>
  )
}
