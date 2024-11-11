// pages/_app.js
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
