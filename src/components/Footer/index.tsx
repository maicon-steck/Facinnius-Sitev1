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
        <div>
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
            className="footer__description"
            dangerouslySetInnerHTML={{ __html: t('home_footer_descricao') }}
          />
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer__title">
              {t('home_footer_companhia_titulo')}
            </h3>

            <ul className="footer__links">
              <li>
                <Link href="/lista-produtos" className="footer__link">
                  <a className="footer__link">
                    {t('home_footer_companhia_produtos')}
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={i18n.language === 'en' ? '/en/locais' : '/locais'}
                  className="footer__link"
                >
                  <a className="footer__link">
                    {t('home_footer_companhia_linhas')}
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

          <div>
            <h3 className="footer__title">
              {t('home_footer_localizacao_titulo')}
            </h3>

            <p className="footer__information">
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

          <div>
            <h3 className="footer__title">{t('home_footer_redes_titulo')}</h3>

            <ul className="footer__social">
              <a
                href="https://pt-br.facebook.com/facinnius/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <i className="ri-facebook-fill">
                  <RiFacebookFill />
                </i>
              </a>
              <a
                href="https://www.instagram.com/facinnius/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <i className="ri-instagram-line">
                  <RiInstagramFill />
                </i>
              </a>

              <a
                href="https://www.youtube.com/facinnius-cosmeticos"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <i className="ri-whatsapp-line">
                  <RiYoutubeFill />
                </i>
              </a>

              <a
                href="https://www.tiktok.com/@facinnius"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <i className="ri-whatsapp-line">
                  <IoLogoTiktok size={18} />
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
          Copyright &#169; - Desenvolvido por <strong>M10web</strong>
        </span>

        {/* <Link href="/cookies" className="footer__privacy">
          Cookies
        </Link> */}
      </div>
    </footer>
  )
}
