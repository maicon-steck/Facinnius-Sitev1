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
              <h1 className="font-1-xxl cor-0">Política de Privacidade</h1>
            </div>
          </div>

          <div className="politica container">
            <div
              dangerouslySetInnerHTML={{
                __html: t("politica_privacidade", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />

            
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
