import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../../../public/styles/global.scss";

export const metadata = {
  title: 'پارسا',
  // description: 'Generated by create next app',
}

// export function generateStaticParams() {
//   return [
//     {locale: 'en'}, 
//     {locale: 'fa'},
//     {locale: 'ar'},
//   ];
// }

export default async function LocaleLayout({ children, params : { locale } }) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <>
    {/* lang="fa-IR" */}
      <html  dir="rtl">
        <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </body>
      </html>
    </>
  )
}