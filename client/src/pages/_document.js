import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="es">
      <Head />
      <body className='max-w-screen-md lg:max-w-screen-2xl mx-auto bg-white dark:bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
