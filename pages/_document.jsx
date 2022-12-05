import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { getCssText } from '@aba-financial-group/whitegold/core/stitches.config'

export default class Document extends NextDocument {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    return { ...page }
  }

  render() {
    const Favicon = (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#C3F75A" />
        <meta name="theme-color" content="#ffffff" />
      </>
    )

    const FbPixel = (
      <script
        dangerouslySetInnerHTML={{
          __html: `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', ${process.env.NEXT_PUBLIC_FB_PIXEL_ID});
  `,
        }}
      />
    )

    const Analytics = (
      <script
        async
        defer
        data-website-id="3f04f7a2-d6d4-42f8-a082-cd2734f8e0db"
        src="https://tools-umami.abainvest.id/umami.js"
      ></script>
    )

    const Styling = (
      <>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </>
    )

    const Fonts = (
      <>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800&display=swap"
        />
      </>
    )

    return (
      <Html>
        <Head>
          {FbPixel}
          {process.env.APP_ENV === 'production' ? Analytics : null}
          {Styling}
          {Fonts}
          {Favicon}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
