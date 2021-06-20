import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head >
                    <>

                        <meta charSet="UTF-8" />
                        <meta name="description" content="Ogani Template" />
                        <meta name="keywords" content="Ogani, unica, creative, html" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                        <title>Udit</title>
                        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet" />
                        <link rel="stylesheet" href="css/bootstrap.min.css%2bfont-awesome.min.css%2belegant-icons.css%2bnice-select.css%2bjquery-ui.min.css%2bowl.carousel.min.css%2bslicknav.min.css%2bstyle.css.pagespeed.cc.4YNTZ7I7f2.css" type="text/css" />
                        <link rel="stylesheet" href="css/A.bootstrap.min.css%2bfont-awesome.min.css%2belegant-icons.css%2bnice-select.css%2bjquery-ui.min.css%2bowl.carousel.min.css%2bslicknav.min.css%2bstyle.css%2cMcc.4YNTZ7I7f2.css.pagespeed.cf.sbKP" type="text/css" />
                        <link rel="stylesheet" href="css/bootstrap.min.css+font-awesome.min.css+elegant-icons.css+nice-select.css+jquery-ui.min.css+owl.carousel.min.css+slicknav.min.css+style.css.pagespeed.cc.4YNTZ7I7f2.css" type="text/css" />

                    </>


                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="js/jquery-3.3.1.min.js" />
                    <script src="js/bootstrap.min.js%2bjquery.nice-select.min.js.pagespeed.jc.08NHUfMhux.js" />
                    <script >eval(mod_pagespeed_ND6iIrfFHB);</script>
                    <script >eval(mod_pagespeed_2CR7bSFHcL);</script>
                    <script src="js/jquery-ui.min.js" />
                    <script src="js/jquery.slicknav.js" />
                    <script src="js/mixitup.min.js" />
                    <script src="js/owl.carousel.min.js" />
                    <script src="js/main.js" />


                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>






                    {/* <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');
</script>  */}
                    {/* <script defer src="../../../static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"6577b6425bd62e04","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2021.5.2","si":10}'></script> */}

                </body>
            </Html>
        )
    }
}

export default MyDocument