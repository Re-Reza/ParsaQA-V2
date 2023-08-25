import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../../public/styles/global.scss";
import Head from "next/head";

export const metadata = {
  title: 'پارسا',
  // description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fa-IR"dir="rtl">
        <body>{children}</body>
      </html>
    </>
  )
}
