import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LanguagesSwitch from '../LanguagesSwitch'
import logoFacinnius from '../../../public/images/LOGOS_FACINNIUS_REGISTRADOS.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { CloseIcon, HamburgerIcon } from '../../../public/icons'

export default function Header() {
  const router = useRouter()
  const [menuFixed, setMenuFixed] = useState<boolean>(false)
  const [hiddenMenuMobile, setHiddenMenuMobile] = useState<boolean>(true)
  const { t } = useTranslation()

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setMenuFixed(true)
      } else if (window.scrollY === 0) {
        setMenuFixed(false)
      }
    })
    return () =>
      document.removeEventListener('scroll', () => {
        setMenuFixed(false)
      })
  }, [])

  function logoSize() {
    if (typeof window !== 'undefined') {
      return window.innerWidth
    }
  }

  return (
    <>
      <header
        className={`header ${menuFixed ? 'scroll-header' : ''}`}
        id="header"
      >
        <nav className="nav container">
          <Link href="/" className="nav__logo">
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'center'
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

          <div className={`nav__menu nav__divDesktop`} id="nav-menu">
            <ul className="nav__list ">
              <li
                className={`nav__item ${
                  router.pathname === '/' ? 'active-link' : ''
                }`}
              >
                <Link href="/" className="nav__link">
                  <a>
                    <i className="ri-home-line"></i>
                    <div
                      className={` ${
                        router.pathname === '/' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>Home</span>
                  </a>
                </Link>
              </li>

              <li
                className={`nav__item ${
                  router.pathname === '/facinnius' ? 'active-link' : ''
                }`}
              >
                <Link href="/facinnius" className="nav__link ">
                  <a>
                    <i className="ri-home-line"></i>
                    <div
                      className={` ${
                        router.pathname === '/facinnius' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>Facinnius</span>
                  </a>
                </Link>
              </li>

              <li
                className={`nav__item ${
                  router.pathname === '/lista-produtos' ? 'active-link' : ''
                }`}
              >
                <Link href="/lista-produtos" className="nav__link">
                  <a>
                    <i className="ri-price-tag-3-line"></i>
                    <div
                      className={` ${
                        router.pathname === '/lista-produtos' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>{t('home_heade_produtos')}</span>
                  </a>
                </Link>
              </li>

              <li
                className={`nav__item ${
                  router.pathname === '/locais' ? 'active-link' : ''
                }`}
              >
                <Link href="/locais" className="nav__link">
                  <a>
                    <i className="ri-compass-line"></i>
                    <div
                      className={` ${
                        router.pathname === '/locais' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>{t('home_header_locais')}</span>
                  </a>
                </Link>
              </li>

              <li
                className={`nav__item ${
                  router.pathname === 'https://wa.me/5511945678190' ? 'active-link' : ''
                }`}
              >
                <Link href="https://wa.me/5511945678190" className="nav__link">
                  <a>
                    <i className="ri-t-shirt-line"></i>
                    <div
                      className={` ${
                        router.pathname === 'https://wa.me/5511945678190' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>{t('home_header_contato')}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`nav__menu nav__divMobile ${
              hiddenMenuMobile && 'nav__hiddenDiv'
            }`}
            id="nav-menu"
          >
            <ul className="nav__list ">
              <li
                className={`nav__item ${
                  router.pathname === '/' ? 'active-link' : ''
                }`}
              >
                <Link href="/" className="nav__link">
                  <a>
                    <i className="ri-home-line"></i>
                    <div
                      className={` ${
                        router.pathname === '/' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>Home</span>
                  </a>
                </Link>
              </li>

              <li
                className={`nav__item ${
                  router.pathname === '/facinnius' ? 'active-link' : ''
                }`}
              >
                <Link href="/facinnius" className="nav__link ">
                  <a>
                    <i className="ri-home-line"></i>
                    <div
                      className={` ${
                        router.pathname === '/facinnius' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>Facinnius</span>
                  </a>
                </Link>
              </li>

              <li
                className={`nav__item ${
                  router.pathname === '/lista-produtos' ? 'active-link' : ''
                }`}
              >
                <Link href="/lista-produtos" className="nav__link">
                  <a>
                    <i className="ri-price-tag-3-line"></i>
                    <div
                      className={` ${
                        router.pathname === '/lista-produtos' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>{t('home_heade_produtos')}</span>
                  </a>
                </Link>
              </li>

              <li
                className={`nav__item ${
                  router.pathname === '/locais' ? 'active-link' : ''
                }`}
              >
                <Link href="/locais" className="nav__link">
                  <a>
                    <i className="ri-compass-line"></i>
                    <div
                      className={` ${
                        router.pathname === '/locais' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>{t('home_header_locais')}</span>
                  </a>
                </Link>
              </li>

              <li
                className={`nav__item ${
                  router.pathname === 'https://wa.me/5511945678190' ? 'active-link' : ''
                }`}
              >
                <Link href="/contato" className="nav__link">
                  <a>
                    <i className="ri-t-shirt-line"></i>
                    <div
                      className={` ${
                        router.pathname === 'https://wa.me/5511945678190' ? 'divCircle' : ''
                      }`}
                    ></div>
                    <span>{t('home_header_contato')}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <i className="ri-moon-line change-theme" id="theme-button">
              <LanguagesSwitch />
            </i>
            <button
              className="nav__buttonHandleMenu"
              onClick={() => {
                setHiddenMenuMobile(!hiddenMenuMobile)
              }}
            >
              {hiddenMenuMobile ? (
                <HamburgerIcon size={30} color={'var(--cor-p2)'} />
              ) : (
                <CloseIcon size={30} color={'var(--cor-p2)'} />
              )}
            </button>
          </div>
        </nav>
        <div className="elementLine"></div>
      </header>
    </>
  )
}
