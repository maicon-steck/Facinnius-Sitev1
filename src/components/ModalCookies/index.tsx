import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const ModalCookies = () => {
  const [coookieTrue, setCookieTrue] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getCookies();
  }, []);

  async function handleCookie() {
    const cookie = setCookie("authorization", "authorized"); 
    setCookieTrue(true);
  }

  function getCookies() {
    setCookieTrue(!!getCookie("authorization"));
  }

  return (
    <div className={`containerCookie ${coookieTrue && "coke"}`}>
      <div className="infoCookie">
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: t("modal_cookies", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </div>

      <button
        className="buttonDefault full"
        onClick={() => {
          handleCookie();
        }}
      >
        {t("modal_cookies_button")}
      </button>
    </div>
  );
};

export default ModalCookies;
