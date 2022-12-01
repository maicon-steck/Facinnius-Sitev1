import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";

export default function Privacidade() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="titulo-bg">
            <div className="titulo container">
              <h1 className="font-1-xxl cor-0">Política de Cookies</h1>
            </div>
          </div>

          <div
            className="politica container"
            dangerouslySetInnerHTML={{
              __html: t("politica_cookies_pt_1", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
          <div
            className="politica container containerBorda"
            dangerouslySetInnerHTML={{
              __html: t("politica_cookies_pt_2", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
          <div
            className="politica container"
            dangerouslySetInnerHTML={{
              __html: t("politica_cookies_pt_3", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
