import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#51cbee' />
          <meta name='description' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus dapibus odio at sodales. Suspendisse sit amet fringilla ex.' />
          <meta property='og:description' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus dapibus odio at sodales. Suspendisse sit amet fringilla ex.' />
          <meta property='og:title' content='Caspar Lant' />
          <meta property='og:site_name' content='Caspar.cc' />
          <meta property='og:type' content='website' />
          <title>Caspar Lant</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}