import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        ></link>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossorigin='anonymous'
        ></link>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
        <link rel='stylesheet' href='css/lightgallery.css' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
        />
        <link rel='stylesheet' href='css/aos.css' />
        <script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
          integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
          crossorigin='anonymous'
        ></script>
        <script
          src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
          integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
          crossorigin='anonymous'
        ></script>
        <script src='js/aos.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/lax.js'></script>
        <script src='https://cdn.jsdelivr.net/picturefill/2.3.1/picturefill.min.js'></script>
        <script src='https://cdn.rawgit.com/sachinchoolur/lightgallery.js/master/dist/js/lightgallery.js'></script>
        <script src='https://cdn.rawgit.com/sachinchoolur/lg-fullscreen.js/master/dist/lg-fullscreen.js'></script>
        <script src='https://cdn.rawgit.com/sachinchoolur/lg-zoom.js/master/dist/lg-zoom.js'></script>
        <script src='https://cdn.rawgit.com/sachinchoolur/lg-hash.js/master/dist/lg-hash.js'></script>
        <script src='.js/custom.js'></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
