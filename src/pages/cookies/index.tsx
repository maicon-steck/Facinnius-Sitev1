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
              <h1 className="font-1-xxl cor-0">
              Política de Cookies 
              </h1>
            </div>
          </div>

          <div className="politica container">
            <div dangerouslySetInnerHTML={{__html: `<div id="wa-comptext-kdp3kgp98xm6w0" >
				<p><span ><strong>1.1 </strong> Tecnologias como cookies, pixel tags, identificadores de dispositivo ou outros e armazenamento local ("Cookies e tecnologias semelhantes") são usadas durante a sua navegação no site para transmitir, proteger e entender Serviços e anúncios, dentro e fora dos Serviços.</span></p>
            <br>
				<p><span><strong>1.1.1 </strong> Cookies são pequenos arquivos armazenados no navegador do Usuário, celular ou outro dispositivo. Pixel tags (também conhecidos como GIFs limpos, web beacons ou pixels) são pequenos blocos de código em uma página da web que permitem que elas realizem ações como ler e armazenar cookies e transmitir informações para os parceiros. A conexão resultante pode incluir informações como o endereço de IP de um dispositivo, a hora em que uma pessoa visualizou o pixel, um identificador associado ao navegador ou dispositivo e o tipo de navegador em uso.</span></p>
			<br/>	
				<p><span><strong>1.1.2 </strong> Armazenamento local é uma tecnologia padrão da indústria que permite que um site ou aplicativo armazene e recupere dados do computador, celular ou outro dispositivo de uma pessoa. Alguns exemplos incluem dispositivos ou armazenamento local HTML5 e caching.</span></p>
						
            <br>
				<p><span><strong>1.2 </strong>Essas tecnologias poderão ser usadas, entre outros, para permitir que nos e nossos parceiros apresentem os conteúdos e ofertas mais relevantes para você, aprimorar os Serviços e ajudar a manter estes Serviços seguros.</span></p>
						
            <br>
				<p><span><strong>1.3 </strong>Os nomes específicos dos Cookies e tecnologias semelhantes usados podem variar na medida em que os Serviços são melhorados e atualizados, mas eles geralmente se restringem às categorias de uso abaixo:</span></p>
			`}}/>
          </div>
		  <div className="politica containerBorda container">
            <div dangerouslySetInnerHTML={{__html: `<div id="wa-comptext-kdp3kgp98xm6w0" >
				<p><span ><strong>Autenticação:</strong> Responsável por auxiliar a manter a segurança dos Serviços, oferecendo suporte ou ativando recursos de segurança e ajudando a detectar atividades que violam os Termos de Uso.</span></p>
            <br>
				<p><span ><strong>Segurança e integridade do site: </strong> Responsável por indicar que você está conectado(a), para que seja possível oferecer a você os recursos apropriados, bem como para entender como você usa os Serviços do nosso site.</span></p>

			<br/>	
				<p><span><strong>Anúncios, ideias e medição:</strong> Responsável por analisar comportamento de navegação e veicular anúncios, torná-los mais relevantes para você e analisar Serviços e o seu uso. Por exemplo, é possível utilizar um cookie para descobrir se alguém a quem um anúncio tenha sido veiculado faz uma compra no site do anunciante ou instala o aplicativo anunciado posteriormente. Da mesma forma, parceiros podem usar cookies ou outras tecnologias semelhantes para determinar se nosso site exibiu um de seus anúncios e qual foi o seu desempenho, ou informar como você interage com ele.</span></p>
						
            <br>
				<p><span><strong>Recursos e serviços do site: </strong>Responsável por ajudar a fornecer produtos e serviços, por exemplo, quando você viu ou interagiu com conteúdo dos Serviços, e fornecer a ele outros plug-ins sociais, outras experiências e conteúdos personalizados ou fazer sugestões.</span></p>
						
            <br>
				<p><span><strong>Desempenho: </strong>Responsável por proporcionar a melhor experiência possível, por exemplo, ajudando a rotear o tráfego entre servidores e perceber com que velocidade os Serviços do nosso site são carregados para diferentes pessoas. Ocasionalmente, poderão ser armazenadas informações no seu navegador ou dispositivo para que os recursos em uso carreguem e respondam rapidamente.</span></p>
			<br>
				<p><span><strong>Análises e pesquisas: </strong>O objetivo é entender, aprimorar e pesquisar Serviços, incluindo quando você acessa o nosso site ou outros sites e aplicativos a partir do computador ou dispositivo móvel. Por exemplo, é possível utilizar Cookies ou tecnologias semelhantes (incluindo informações do seu dispositivo) para entender como você está usando plug-ins sociais e melhorá-los, podendo ser compartilhadas informações sobre essa análise com os parceiros da da nossa empresa.</span></p>
			`}}/>
          </div>
		  <div className="politica container">
            <div dangerouslySetInnerHTML={{__html: `<div id="wa-comptext-kdp3kgp98xm6w0" >
				<p><span ><strong>1.4</strong> É possível que você gerencie preferências de Cookies e outras tecnologias semelhantes a partir da configuração de seu navegador, recusando ou excluindo alguns deles. No entanto, essa opção poderá comprometer os Serviços do nosso site ou impedir o funcionamento de determinadas funcionalidades que integram os Serviços.</span></p>
           
			`}}/>
          </div>
		  
		  

        </section>
        <Footer />
      </main>
    </>
  );
}
