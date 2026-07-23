import React from 'react';
import { FaDatabase, FaChartBar, FaChartPie, FaChartLine, FaServer } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import Styles from "./BackgroundAnimation.module.scss";

// Define o array com os ícones que representam um Analista de Dados
const dataIcons = [FaDatabase, FaChartBar, FaChartPie, FaChartLine, FaServer, BsGraphUp];

// Renderiza a animação de fundo decorativa
const BackgroundAnimation = () => {
  // Configura a quantidade de ícones flutuantes na tela
  const numberOfIcons = 20;

  return (
    // Agrupa os ícones e os esconde dos leitores de tela por ser um elemento puramente visual
    <div className={Styles.backgroundAnimationContainer} aria-hidden="true">
      {/* Executa a iteração para gerar a quantidade definida de ícones */}
      {Array.from({ length: numberOfIcons }).map((_, index) => {
        // Intercala os ícones do array para variar os desenhos na tela
        const Icon = dataIcons[index % dataIcons.length];
        return (
          <Icon 
            key={index} 
            // Aplica a classe base e a classe dinâmica gerada pelo loop do SCSS Module
            className={`${Styles.neonIcon} ${Styles[`icon-${index + 1}`]}`} 
          />
        );
      })}
    </div>
  );
};

export default BackgroundAnimation;