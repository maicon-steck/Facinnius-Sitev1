import { AppProps } from 'next/app'
import '../styles/styles.scss'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import i18n from '../i18n'
import Head from 'next/head'
import ModalCookies from '../components/ModalCookies'
import WppBtn from '../components/WppBtn'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  if (router.locale) {
    i18n.changeLanguage(router.locale)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=500px,user-scalable=no" />
      </Head>
      <Component {...pageProps} />
      <WppBtn />
      <ToastContainer />
      <ModalCookies />
    </>
  )
}

export default MyApp
