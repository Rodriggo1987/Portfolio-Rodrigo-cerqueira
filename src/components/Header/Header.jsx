import React from "react";
import Styles from "./Header.module.scss";

// Renderiza o cabeçalho principal contendo o status de disponibilidade e o currículo
export default function Header() {
  return (
    // Define o contêiner principal com a descrição para leitores de tela
    <header className={Styles.secaoHeader} aria-label="Cabeçalho com informações de contato e currículo">
      
      {/* Agrupa o indicador visual e o link de status de trabalho */}
      <div className={Styles.statusContainer}>
        {/* Exibe o ponto piscante e o esconde de leitores de tela por ser puramente visual */}
        <span className={Styles.pulseDot} aria-hidden="true"></span>
        
        {/* Direciona o usuário para o contato via WhatsApp */}
        <a
          href="https://wa.me/5511989561439"
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.openWork}
          aria-label="Status: Aberto para trabalho. Entrar em contato via WhatsApp"
        >
          Open to work
        </a>
      </div>

      {/* Disponibiliza o currículo para download direto */}
      <a
        href="/curriculo/CurriculoRodrigoNascimento.pdf"
        download
        className={Styles.buttonCurriculo}
        aria-label="Fazer o download do currículo em formato PDF"
      >
        Download CV
      </a>
    </header>
  );
}