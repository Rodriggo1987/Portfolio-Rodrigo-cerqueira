import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Styles from "./Hero.module.scss";

// Ajuste o caminho abaixo conforme a estrutura exata das suas pastas
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation.jsx";
import FotoPerfil from "../../assets/rodrigo_perfil.png";

// Renderiza a seção principal de apresentação do portfólio
export default function Hero() {
  return (
    // Define a área principal da página e vincula o título para leitores de tela
    <main className={Styles.mainHero} aria-labelledby="titulo-nome">
      {/* Renderiza a animação dos ícones de fundo */}
      <BackgroundAnimation />

      {/* Agrupa o conteúdo da apresentação pessoal */}
      <section
        className={Styles.conteudoHero}
        aria-label="Apresentação pessoal"
      >
        {/* Exibe a foto de perfil com texto alternativo descritivo */}
        <img
          src={FotoPerfil}
          alt="Foto de perfil de Rodrigo Nascimento"
          className={Styles.FotoPerfil}
        />

        {/* Identifica o cargo atual do profissional */}
        <section className={Styles.textoCargo}>
          <h3 className={Styles.cargo}>Analista de Dados</h3>

          {/* Destaca o nome principal da página */}
          <h1 id="titulo-nome" className={Styles.nome}>
            Rodrigo Nascimento
          </h1>

          {/* Disponibiliza o link para contato direto via WhatsApp */}
          <a
            href="https://wa.me/5511989561439"
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.whatsapp}
            aria-label="Iniciar conversa no WhatsApp com Rodrigo Nascimento"
          >
            {/* Oculta o ícone visual para os leitores de tela */}
            <FaWhatsapp className={Styles.iconeWhatsapp} aria-hidden="true" />
            Vamos conversar?
          </a>
        </section>
      </section>
    </main>
  );
}
