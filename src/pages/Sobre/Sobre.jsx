import React from "react";
import Styles from "./Sobre.module.scss";
import FotoSobre from "../../assets/rodrigo_perfil.png";

// Importa o componente da animação de fundo
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation.jsx";

// Renderiza a seção Sobre com informações detalhadas da trajetória profissional
export default function Sobre() {
  return (
    // Define a área principal e estabelece o título de referência para acessibilidade
    <main className={Styles.mainSobre} aria-labelledby="sobre-titulo">
      
      {/* Insere a animação de fundo decorativa na página */}
      <BackgroundAnimation />

      {/* Agrupa o conteúdo central da página */}
      <section className={Styles.conteudoSobre} aria-label="Biografia e trajetória">
        <div className={Styles.boxSobre}>
          
          {/* Contém a imagem de perfil */}
          <div className={Styles.boxImagem}>
            <img
              src={FotoSobre}
              alt="Foto de perfil de Rodrigo com foco no rosto"
              className={Styles.fotoSobre}
            />
          </div>

          {/* Organiza o bloco de texto biográfico */}
          <div className={Styles.boxTexto}>
            <h1 id="sobre-titulo" className={Styles.boxTitulo}>
              Quem é <span className={Styles.destaque}>Rodrigo?</span>
            </h1>

            <p>
              <span className={Styles.destaque}>
                Iniciei minha trajetória na tecnologia em 2012
              </span>
              , atuando como Auxiliar de Suporte Técnico, período em que também
              estudava Redes de Computadores. Ao longo dessa jornada, desenvolvi
              habilidades sólidas na resolução de falhas, tratamento de
              incidentes e aplicação de boas práticas voltadas à gestão de
              serviços de TI.
            </p>

            <p>
              Nos últimos anos, direcionei minha carreira para o{" "}
              <span className={Styles.destaque}>universo dos dados</span>,
              aprofundando conhecimentos em análise, compreensão de negócios,
              gestão e arquitetura de dados. Essa transição ampliou minha visão
              estratégica sobre como os dados podem apoiar decisões, otimizar
              processos e gerar valor para as organizações.
            </p>

            <p>
              Tenho experiência no desenvolvimento e modelagem de estruturas
              escaláveis, como{" "}
              <span className={Styles.destaque}>Data Lakes</span> e{" "}
              <span className={Styles.destaque}>Data Warehouses</span>, além de
              conhecimento em arquiteturas modernas baseadas em{" "}
              <span className={Styles.destaque}>Data Fabric</span>.
            </p>

            <p>
              Atualmente, estou em fase de conclusão do curso de{" "}
              <span className={Styles.destaque}>Ciência de Dados</span> e busco
              me especializar na área de{" "}
              <span className={Styles.destaque}>Business Analysis</span>.
              Durante minha formação, desenvolvi competências em análise,
              modelagem, interpretação e visualização de dados, com foco em
              transformar informações em insights relevantes para o negócio.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}