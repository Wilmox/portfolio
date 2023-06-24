// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="keywords" content="portfolio, simon, wilmots, Simon, Wilmots"/>
        <meta name="description" content="AI & Robotics Student, Computer Nerd, Astronomy Freak, Verified Freelancer, Your Next Hire." />
        <meta name="subject" content="Simon Wilmots's Portfolio" />
        <meta name="copyright"content="Simon Wilmots" />
        <meta name="language" content="en_GB" />
        <meta name="robots" content="index,follow" />
        <meta name="abstract" content="AI & Robotics Student, Computer Nerd, Astronomy Freak, Verified Freelancer, Your Next Hire." />
        <meta name="summary" content="AI & Robotics Student, Computer Nerd, Astronomy Freak, Verified Freelancer, Your Next Hire." />
        <meta name="Classification" content="Personal" />
        <meta name="author" content="Simon Wilmots" />
        <meta name="owner" content="Simon Wilmots"/>
        <meta name="url" content="http://www.simonwilmots.com"/>
        <meta name="rating" content="General" />

        <meta name="og:title" content="Simon Wilmots 🚀"/>
        <link rel="canonical" href="https://simonwilmots.com" />
        <meta property="og:locale" content="en_GB" />
        <meta name="og:type" content="website"/>
        <meta name="og:url" content="http://simonwilmots.com"/>
        <meta name="image" property="og:image" content="/assets/img/banner.jpg" />
        <meta name="og:description" content="AI & Robotics Student, Astronomy Freak, Computer Nerd, Verified Freelancer, Your Next Hire."/>
        <meta name="og:site_name" content="http://www.simonwilmots.com"/>
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/assets/img/ico.ico" />
        <link rel="apple-touch-icon" href="/assets/img/ico.ico" />
        <link rel="shortcut icon" href="/assets/img/ico.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}