// Importa as ferramentas de roteamento e os ícones visuais
import { NavLink } from "react-router-dom";
import {
  FaUserLarge,
  FaBriefcase,
  FaNetworkWired,
  FaWhmcs,
  FaLink,
} from "react-icons/fa6";

import Styles from "./Footer.module.scss";

// Renderiza o rodapé principal com o menu de navegação fixo
export default function Footer() {
  return (
    // Define a região do rodapé na página
    <footer aria-label="Rodapé de navegação da página">
      {/* Configura o menu de navegação com efeito de vidro embasado */}
      <nav className={Styles.footerNav} aria-label="Menu principal de navegação">
        <ul className={Styles.listNav} role="menubar">
          
          {/* Disponibiliza o link para a seção inicial */}
          <li role="none">
            <NavLink
              to="/"
              end
              aria-label="Ir para o início"
              role="menuitem"
              className={({ isActive }) =>
                isActive
                  ? `${Styles.itemNav} ${Styles.active}`
                  : Styles.itemNav
              }
            >
              <FaUserLarge aria-hidden="true" />
            </NavLink>
          </li>

          {/* Disponibiliza o link para a seção Sobre */}
          <li role="none">
            <NavLink
              to="/sobre"
              aria-label="Ir para a página Sobre Mim"
              role="menuitem"
              className={({ isActive }) =>
                isActive
                  ? `${Styles.itemNav} ${Styles.active}`
                  : Styles.itemNav
              }
            >
              <FaBriefcase aria-hidden="true" />
            </NavLink>
          </li>

          {/* Disponibiliza o link para a seção de Habilidades */}
          <li role="none">
            <NavLink
              to="/skills"
              aria-label="Ir para a página de Habilidades Técnicas"
              role="menuitem"
              className={({ isActive }) =>
                isActive
                  ? `${Styles.itemNav} ${Styles.active}`
                  : Styles.itemNav
              }
            >
              <FaNetworkWired aria-hidden="true" />
            </NavLink>
          </li>

          {/* Disponibiliza o link para a seção de Projetos */}
          <li role="none">
            <NavLink
              to="/projetos"
              aria-label="Ir para a página de Projetos"
              role="menuitem"
              className={({ isActive }) =>
                isActive
                  ? `${Styles.itemNav} ${Styles.active}`
                  : Styles.itemNav
              }
            >
              <FaWhmcs aria-hidden="true" />
            </NavLink>
          </li>

          {/* Disponibiliza o link para a seção de Contato */}
          <li role="none">
            <NavLink
              to="/contato"
              aria-label="Ir para a página de Contato"
              role="menuitem"
              className={({ isActive }) =>
                isActive
                  ? `${Styles.itemNav} ${Styles.active}`
                  : Styles.itemNav
              }
            >
              <FaLink aria-hidden="true" />
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </footer>
  );
}