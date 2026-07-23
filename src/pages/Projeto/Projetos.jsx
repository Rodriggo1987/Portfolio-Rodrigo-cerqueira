import React from "react";

// Importa as imagens dos projetos
import ConSQL from "../../assets/projetos/Projeto1.png";
import DashPBI from "../../assets/projetos/Projeto2.png";
import PBIDax from "../../assets/projetos/Projeto3.png";
import PBIDesk from "../../assets/projetos/Projeto4.png";
import PBICalcDax from "../../assets/projetos/Projeto5.png";
import PBILingDax from "../../assets/projetos/Projeto6.png";
import PBIAnDad from "../../assets/projetos/Projeto7.png";
import PySpark from "../../assets/projetos/Projeto8.png";
import VegaLite from "../../assets/projetos/Projeto9.png";

import Styles from "./Projetos.module.scss";

// Importa a animação de fundo decorativa
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";

// Define a estrutura estática dos projetos fora do componente para evitar re-renderizações desnecessárias
const projetos = [
  {
    id: 1,
    img: ConSQL,
    title: "Consultas SQL",
    text: "Montamos uma seleção que determina se as vendas mensais por cliente são válidas ou não. Criaremos também um relatório a pedido da área comercial da empresa.",
    tag1: "SQL",
    tag2: "MySQL",
    tag3: "Banco de Dados",
    link: "https://github.com/Rodriggo1987/Analise-de-Dados/tree/Projeto-07",
  },
  {
    id: 2,
    img: DashPBI,
    title: "Dashboard no PowerBI",
    text: "Analisamos o dataset de um Petshop, afim de responder algumas perguntas de negocio ao cliente. Iniciamos o tratamento de dados e relacionamento das tabelas, para corresponder as perguntas e gerar um dash coerente ao negocio.",
    tag1: "PowerBI",
    tag2: "Microsoft Fabric",
    tag3: "Excel",
    link: "https://github.com/Rodriggo1987/Analise-de-Dados/tree/Projeto-01",
  },
  {
    id: 3,
    img: PBIDax,
    title: "Power BI com Linguagem Dax",
    text: "Nesse projeto criei algumas medidas, como calculo do faturamento total e porcentagem de vendas utilizando função calculate e filtros, para responder a equipe de Marketing.",
    tag1: "PowerBI",
    tag2: "DAX",
    tag3: "DataViz",
    link: "https://github.com/Rodriggo1987/Analise-de-Dados/tree/Projeto-09",
  },
  {
    id: 4,
    img: PBIDesk,
    title: "Power BI Desktop: realizando ETL no Power Query",
    text: "Neste projeto, foram realizado tratamentos e carga dos dados visando boas práticas utilizando o Power Query Editor.",
    tag1: "PowerBI",
    tag2: "ETL",
    tag3: "Modelagem de Dados",
    link: "https://github.com/Rodriggo1987/Analise-de-Dados/tree/Projeto-02",
  },
  {
    id: 5,
    img: PBICalcDax,
    title: "Power BI: construindo cálculos com Dax",
    text: "Aperfeiçoei as principais funcionalidades da linguagem DAX, como funções de tabela e filtro, FILTER, ALL, REMOVEFILTERS e KEEPFILTERS, para aplicar ou remover filtros conforme necessário.",
    tag1: "DAX",
    tag2: "PowerBI",
    tag3: "DataViz",
    link: "https://github.com/Rodriggo1987/Analise-de-Dados/tree/Projeto-05",
  },
  {
    id: 6,
    img: PBILingDax,
    title: "Power BI: Linguagem DAX",
    text: "Utilizei nesse projeto as Colunas Calculadas: Usadas para criar valores linha a linha em uma tabela. E as Medidas: Utilizadas para cálculos agregados, como somas, médias ou proporções, aplicadas sob demanda.",
    tag1: "DAX",
    tag2: "PowerBI",
    tag3: "DataViz",
    link: "https://github.com/Rodriggo1987/Analise-de-Dados/tree/Projeto-04",
  },
  {
    id: 7,
    img: PBIAnDad,
    title: "Power BI: visualizando e analisando dados",
    text: "Nesse projeto eu aprendi a identificar os tipos de gráficos mais apropriados para diferentes necessidades de análise, considerando o objetivo de cada visualização e o público-alvo.",
    tag1: "PowerBI",
    tag2: "DataViz",
    tag3: "Storyteling",
    link: "https://github.com/Rodriggo1987/Analise-de-Dados/tree/Projeto-06",
  },
  {
    id: 8,
    img: PySpark,
    title: "Análise com PySpark",
    text: "Realizar a leitura, tratamento e análise exploratória de um dataset contendo informações dos jogadores participantes da Copa do Mundo FIFA 2018, utilizando a biblioteca PySpark.",
    tag1: "Python",
    tag2: "Jupyter",
    tag3: "Pyspark",
    link: "https://github.com/Rodriggo1987/Python/blob/Pyspark-01/Pyspark.ipynb",
  },
  {
    id: 9,
    img: VegaLite,
    title: "Visuais declarativos no Deneb",
    text: "Construimos gráficos personalizados utilizando as linguagens HTML e CSS e elaboramos visuais animados e interativos no dashboard utilizando medidas DAX.",
    tag1: "Python",
    tag2: "Jupyter",
    tag3: "Pyspark",
    link: "https://github.com/Rodriggo1987/Analise-de-Dados/tree/Projeto-03",
  }
];

// Renderiza a seção do portfólio dedicada à exibição dos projetos
export default function Projetos() {
  return (
    // Agrupa a página e define o título para leitores de tela
    <main className={Styles.secao} aria-labelledby="projetos-titulo">
      
      {/* Insere a animação de fundo decorativa */}
      <BackgroundAnimation />

      {/* Contêiner para proteger o conteúdo do z-index da animação */}
      <div className={Styles.conteudoZIndex}>
        <div className={Styles.secaoTitle}>
          <h2 id="projetos-titulo" className={Styles.title}>
            Meus <span className={Styles.destaqueProjetos}>Projetos</span>
          </h2>
        </div>

        {/* Organiza a grade de projetos */}
        <section className={Styles.projetosGrid} aria-label="Galeria de projetos realizados">
          {projetos.map((projeto) => (
            // Define o cartão individual de cada projeto
            <article key={projeto.id} className={Styles.projetoCard}>
              <img
                src={projeto.img}
                alt={`Captura de tela do projeto: ${projeto.title}`}
                className={Styles.projetoImg}
              />

              <div className={Styles.projetoConteudo}>
                <div className={Styles.divConteudo}>
                  <h3 className={Styles.projetoTitle}>{projeto.title}</h3>
                  <p className={Styles.projetoText}>{projeto.text}</p>

                  {/* Renderiza a lista de tags tecnológicas do projeto */}
                  <ul className={Styles.projetoTags} aria-label="Tecnologias utilizadas">
                    {[projeto.tag1, projeto.tag2, projeto.tag3].map((tag) => (
                      <li key={tag} className={Styles.projetoTag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Disponibiliza o link externo para o código do projeto */}
                <div className={Styles.DivProjetoButton}>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.projetoButton}
                    aria-label={`Ver o código fonte do projeto ${projeto.title} no GitHub`}
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}