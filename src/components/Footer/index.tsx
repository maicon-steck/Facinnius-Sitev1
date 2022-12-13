import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri'
import { IoLogoTiktok } from 'react-icons/io5'
import Image from 'next/image'
import logoFacinnius from '../../../public/images/LOGOS_FACINNIUS_REGISTRADOS.png'
import i18n from '../../i18n'

export default function Footer() {
  const { t } = useTranslation()

  function logoSize() {
    if (typeof window !== 'undefined') {
      return window.innerWidth
    }
  }

  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="flex_center">
          <Link href="/" className="nav__logo">
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'center',
                marginLeft: '-10px',
                marginBottom: '8px'
              }}
            >
              <Image
                src={logoFacinnius}
                alt="Logo"
                height={logoSize() > 500 ? 42 : 30}
                width={logoSize() > 500 ? 162 : 116}
              />
            </a>
          </Link>

          <p
            className="footer__description footer__justify"
            dangerouslySetInnerHTML={{ __html: t('home_footer_descricao') }}
          />
        </div>

        <div className="footer__content">
          <div className="flex_center">
            <h3 className="footer__title">
              {t('home_footer_companhia_titulo')}
            </h3>

            <ul className="footer__links text_center">
              <li>
                <Link href="/lista-produtos" className="footer__link">
                  <a className="footer__link">
                    {t('home_footer_companhia_produtos')}
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={i18n.language === 'en' ? '/en/facinnius' : '/facinnius'}
                  className="footer__link"
                >
                  <a className="footer__link">
                    {t('home_footer_companhia_sobre')}
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={i18n.language === 'en' ? '/en/locais' : '/locais'}
                  className="footer__link"
                >
                  <a className="footer__link">
                    {t('home_footer_companhia_locais')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contato" className="footer__link">
                  <a className="footer__link">
                    {t('home_footer_companhia_contato')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex_center">
            <h3 className="footer__title">
              {t('home_footer_localizacao_titulo')}
            </h3>

            <p className="footer__information text_center">
              Av Nova Zelândia, 1050 <br />
              Parque Capuava - Santo André/SP
            </p>

            <p className="footer__information" style={{ marginTop: '10px' }}>
              CEP 09270-190
            </p>

            <p className="footer__information" style={{ marginTop: '10px' }}>
              CNPJ 20.712.759/0001-04
            </p>
          </div>

          <div className=" center">
            <h3 className="footer__title text_center">
              {t('home_footer_redes_titulo')}
            </h3>

            <ul className="footer__social">
              <a
                href="https://pt-br.facebook.com/facinnius/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <i className="ri-facebook-fill">
                  <RiFacebookFill color="C59B35" />
                </i>
              </a>
              <a
                href="https://www.instagram.com/facinnius/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <i className="ri-instagram-line">
                  <RiInstagramFill color="C59B35" />
                </i>
              </a>

              <a
                href="https://www.youtube.com/facinnius-cosmeticos"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <i className="ri-whatsapp-line">
                  <RiYoutubeFill color="C59B35" />
                </i>
              </a>

              <a
                href="https://www.tiktok.com/@facinnius"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <i className="ri-whatsapp-line">
                  <IoLogoTiktok size={18} color="C59B35" />
                </i>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__info container">
        <div className="footer__privacy">
          <p
            style={{ textAlign: 'center', maxWidth: '80ch' }}
            dangerouslySetInnerHTML={{ __html: t('home_footer_politica') }}
          />
        </div>
        <span className="footer__copy">
          <Link href={'https://m10web.com.br'} target="_blank">
            <a target={'_blank'}>
              Copyright &#169; - Desenvolvido por <strong>M10web</strong>
            </a>
          </Link>
        </span>

        {/* <Link href="/cookies" className="footer__privacy">
          Cookies
        </Link> */}
      </div>
    </footer>
  )
}
