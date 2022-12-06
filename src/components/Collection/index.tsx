import React from "react";
import { useRouter } from "next/router";

import { useTranslation } from "react-i18next";

import professional from "../../../public/images/professional.png";
import homecare from "../../../public/images/homecare.png";
import Image from "next/image";

export default function Collection() {
  const { t } = useTranslation();
  const router = useRouter();

  function handleOnClickProduct(typo: any) {
    router.push({
      pathname: `/lista-produtos/`,
      query: { linha: typo },
    });
  }
  return (
    <section className="collection container" id="collection">
      <div className="collection__line">
        <Image src={professional} layout="fill" objectFit="cover" />
        <div className="collection__line__lineNameLeft">
          <h3 className="collection__line__text">
            {t("line_upperCase")}
            <span className="collection__line__textBold">
              {" "}
              {t("profissional_upperCase")}
            </span>
          </h3>
        </div>
      </div>
      <div className="collection__line">
        <Image src={homecare} layout="fill" objectFit="cover" />
        <div className="collection__line__lineNameRight">
          <h3 className="collection__line__text">
            {t("line_upperCase")}
            <span className="collection__line__textBold">
              {t("homeCare_upperCase")}
            </span>
          </h3>
        </div>
      </div>

      {/* <div className="collection__container container">
        <div className="collection__explore">
          <div className="collection__data-men">
          <h2 className="collection__title" dangerouslySetInnerHTML={{ __html: t('home_colecao_masculino') }} />
            <button onClick={() => handleOnClickProduct('profissional')} className="button__link">
            {t('home_colecao_botao')} <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </button>
          </div>

          <Image src={Collection1} alt="collection image" onClick={() => handleOnClickProduct('profissional')} style={{ cursor: 'pointer'}}/>
        </div>

        <div className="collection__explore" >
          <Image src={Collection2} alt="collection image" onClick={() => handleOnClickProduct('homecare')} style={{ cursor: 'pointer' }} />

          <div className="collection__data-women">
            <h2 className="collection__title" dangerouslySetInnerHTML={{ __html: t('home_colecao_feminino') }} />
            <button onClick={() => handleOnClickProduct('homecare')} className="button__link">
            {t('home_colecao_botao')} <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
