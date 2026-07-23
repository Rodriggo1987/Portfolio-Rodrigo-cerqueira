import { useEffect, useState } from "react";

// Importa os ícones das bibliotecas correspondentes
import { SiPython, SiApachespark, SiPandas } from "react-icons/si";
import { FaLinux, FaUserGraduate } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { LuBrain } from "react-icons/lu";
import {
  TbDatabase,
  TbDatabaseCog,
  TbChartHistogram,
  TbStack2,
  TbChartBar,
} from "react-icons/tb";

// Importa os ativos de imagem/SVGs
import PowerBi from "../../assets/icones/power-bi-icon.svg";
import Spark from "../../assets/icones/Apache-Spark-icon.svg";
import DataLake from "../../assets/icones/Azure-Data-Lake-Icon-01.svg";
import Fabric from "../../assets/icones/Microsoft-Fabric-icon-01.svg";
import GitHub from "../../assets/icones/github-icon.svg";
import Linux from "../../assets/icones/linux-icon.svg";
import ITIL from "../../assets/icones/logo-ITIL.svg";
import Excel from "../../assets/icones/microsoft-excel-icon.svg";
import MongoDb from "../../assets/icones/mongodb-icon.svg";
import MySql from "../../assets/icones/mysql-icon.svg";
import Python from "../../assets/icones/python-programming-language-icon.svg";

import Styles from "./Skills.module.scss";

// Opcional: Importa a animação de fundo para manter a consistência visual do projeto
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation.jsx";

// Define a estrutura de dados estática fora do componente para otimizar a renderização
const hardSkills = [
  { nome: "Python", porcentagem: 10, icone: SiPython },
  { nome: "PowerBI", porcentagem: 35, icone: TbChartHistogram },
  { nome: "DAX", porcentagem: 20, icone: TbChartHistogram },
  { nome: "Microsoft Fabric", porcentagem: 5, icone: TbStack2 },
  { nome: "Modelagem de Dados", porcentagem: 5, icone: TbDatabaseCog },
  { nome: "PySpark", porcentagem: 5, icone: SiApachespark },
  { nome: "SQL", porcentagem: 35, icone: TbDatabase },
  { nome: "Pandas", porcentagem: 5, icone: SiPandas },
  { nome: "Linux", porcentagem: 60, icone: FaLinux },
  { nome: "ITIL", porcentagem: 60, icone: PiCertificateFill },
  { nome: "DataViz", porcentagem: 15, icone: TbChartBar },
];

// Define a lista estática de tecnologias visuais
const habilidades = [
  { id: 1, alt: "Power Bi", imgTech: PowerBi },
  { id: 2, alt: "Spark", imgTech: Spark },
  { id: 3, alt: "Azure Data Lake", imgTech: DataLake },
  { id: 4, alt: "Microsoft Fabric", imgTech: Fabric },
  { id: 5, alt: "GitHub", imgTech: GitHub },
  { id: 6, alt: "Linux", imgTech: Linux },
  { id: 7, alt: "ITIL", imgTech: ITIL },
  { id: 8, alt: "Microsoft Excel", imgTech: Excel },
  { id: 9, alt: "Mongo DB", imgTech: MongoDb },
  { id: 10, alt: "MySQL", imgTech: MySql },
  { id: 11, alt: "Python", imgTech: Python },
];

// Renderiza a seção completa de habilidades, formação e competências
export default function HardSkills() {
  // Controla o estado de carregamento para disparar a animação das barras de progresso
  const [carregado, setCarregado] = useState(false);

  // Executa o temporizador ao montar o componente para preencher as barras
  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregado(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Agrupa todo o conteúdo da página e define o referencial de acessibilidade
    <main className={Styles.Skills} aria-labelledby="skills-main-title">
      {/* Insere a animação de fundo decorativa */}
      <BackgroundAnimation />

      <div className={Styles.conteudoZIndex}>
        <h2 id="skills-main-title" className={Styles.skillsTitle}>
          Minhas <span className={Styles.destaque}>Skills</span>
        </h2>
        <section className={Styles.secaoFormacoesIdiomas}>
          {/* Agrupa as informações de formação acadêmica */}
          <section className={Styles.formacao} aria-labelledby="formacao-title">
            <div className={Styles.icones}>
              <FaUserGraduate className={Styles.icon} aria-hidden="true" />
              <h3 id="formacao-title" className={Styles.formacaoTitle}>
                Formação Acadêmica
              </h3>
            </div>
            <span className={`${Styles.formacaoGrad} ${Styles.destaque}`}>
              Graduado em Ciência de Dados
            </span>
            <p className={Styles.formacaoUni}>
              Universidade Unopar - Anhanguera
            </p>
          </section>

          {/* Agrupa os níveis de proficiência em idiomas */}
          <section className={Styles.idiomas} aria-labelledby="idiomas-title">
            <div className={Styles.icones}>
              <MdLanguage className={Styles.icon} aria-hidden="true" />
              <h3 id="idiomas-title" className={Styles.idiomasTitle}>
                Idiomas
              </h3>
            </div>
            <p className={Styles.idiomasLingua}>
              Língua Inglesa -{" "}
              <span className={`${Styles.idiomaNivel} ${Styles.destaque}`}>
                Intermediário
              </span>
            </p>
            <p className={Styles.idiomasLingua}>
              Língua Portuguesa -{" "}
              <span className={`${Styles.idiomaNivel} ${Styles.destaque}`}>
                Nativo
              </span>
            </p>
          </section>
        </section>

        {/* Agrupa as competências comportamentais (Soft Skills) */}
        <section
          className={Styles.softSkills}
          aria-labelledby="soft-skills-title"
        >
          <h3 id="soft-skills-title" className={Styles.softSkillsTitle}>
            <LuBrain
              className={Styles.softSkillsTitleIcon}
              aria-hidden="true"
            />
            Soft <span className={Styles.destaque}>Skills</span>
          </h3>
          <ul
            className={Styles.softSkillsList}
            aria-label="Lista de soft skills"
          >
            <li className={Styles.softSkillsListItem}>Comunicação clara</li>
            <li className={Styles.softSkillsListItem}>Pensamento crítico</li>
            <li className={Styles.softSkillsListItem}>Pensamento analítico</li>
            <li className={Styles.softSkillsListItem}>Trabalho em equipe</li>
            <li className={Styles.softSkillsListItem}>Adaptabilidade</li>
            <li className={Styles.softSkillsListItem}>
              Perspicácia e criatividade
            </li>
            <li className={Styles.softSkillsListItem}>Curiosidade</li>
            <li className={Styles.softSkillsListItem}>Storytelling</li>
            <li className={Styles.softSkillsListItem}>Proatividade </li>
            <li className={Styles.softSkillsListItem}>Gestão de tempo</li>
          </ul>
        </section>

        {/* Contêiner principal para agrupar as Hard Skills e as Habilidades Visuais */}
        <div className={Styles.containerHardSkills}>
          {/* Mapeia e renderiza as barras de progresso técnico */}
          <section
            className={Styles.hardSkills}
            aria-labelledby="hard-skills-title"
          >
            <h3 id="hard-skills-title" className={Styles.hardSkillsTitle}>
              <TbDatabase
                className={Styles.hardSkillsTitleIcon}
                aria-hidden="true"
              />
              Hard <span className={Styles.destaque}>Skills</span>
            </h3>

            <div className={Styles.hardSkillsList}>
              {hardSkills.map(({ nome, porcentagem, icone: Icone }) => (
                <div className={Styles.skill} key={nome}>
                  <div className={Styles.skillTop}>
                    <div className={Styles.skillName}>
                      <Icone className={Styles.skillIcon} aria-hidden="true" />
                      <span>{nome}</span>
                    </div>
                    <strong>{porcentagem}%</strong>
                  </div>

                  <div
                    className={Styles.skillBar}
                    role="progressbar"
                    aria-label={`Nível de conhecimento em ${nome}`}
                    aria-valuenow={porcentagem}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className={Styles.skillProgress}
                      style={{ width: carregado ? `${porcentagem}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mapeia e renderiza as ferramentas de desenvolvimento em formato de grade */}
          <section
            className={Styles.habDesenvContainer}
            aria-labelledby="hab-desenv-title"
          >
            <h3 id="hab-desenv-title" className={Styles.habDesenvTitle}>
              Habilidades em{" "}
              <span className={Styles.destaque}>Desenvolvimento</span>
            </h3>
            <div className={Styles.techDesenv}>
              <ul
                className={Styles.techDesenvList}
                aria-label="Ferramentas e tecnologias"
              >
                {habilidades.map((item) => (
                  <li key={item.id} className={Styles.techDesenvListItem}>
                    <img
                      src={item.imgTech}
                      alt={`Ícone representativo de ${item.alt}`}
                      title={item.alt}
                      className={Styles.imgTech}
                    />
                    <p className={Styles.techDesenvListItemText}>{item.alt}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
