import { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";

import Styles from "./Contato.module.scss";

// Importa a animação de fundo
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  // Atualiza o estado do formulário conforme o usuário digita
  function handleChange(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  // Monta o link mailto e redireciona o usuário para o cliente de email padrão
  function handleSubmit(event) {
    event.preventDefault();

    const destinatario = "nasscimmento@hotmail.com";
    const assuntoEmail = encodeURIComponent(form.assunto);
    const corpoEmail = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\n\nMensagem:\n${form.mensagem}`
    );

    window.location.href = `mailto:${destinatario}?subject=${assuntoEmail}&body=${corpoEmail}`;
  }

  return (
    <main className={Styles.contatoSection} aria-labelledby="contato-title">
      
      {/* Mantém a consistência visual com a animação de fundo */}
      <BackgroundAnimation />

      <div className={Styles.conteudoZIndex}>
        <div className={Styles.layoutGrid}>
          
          {/* Lado Esquerdo: Textos, Redes Sociais e Informações de Contato */}
          <section className={Styles.infoContato}>
            <div className={Styles.divTitle}>
              <h2 id="contato-title" className={Styles.title}>
                Links para <span className={Styles.destaque}>contato</span>
              </h2>
              <p className={Styles.titleText}>
                Entre em contato para tirar dúvidas, apresentar uma oportunidade ou
                conversar sobre novos projetos. Estou aberto a ideias criativas e
                colaborações que possam gerar soluções de valor.
              </p>
            </div>

            {/* Links das Redes Sociais */}
            <nav className={Styles.redesSociais} aria-label="Redes sociais">
              <ul className={Styles.redesSociaisList}>
                <li className={Styles.redesSociaisListItem}>
                  <a
                    href="https://www.linkedin.com/in/rodrigo-cerqueira-81b66659/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Acessar LinkedIn"
                  >
                    <FaLinkedin className={Styles.redesSociaisIcon} aria-hidden="true" />
                  </a>
                </li>
                <li className={Styles.redesSociaisListItem}>
                  <a
                    href="https://github.com/Rodriggo1987"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Acessar GitHub"
                  >
                    <FaGithub className={Styles.redesSociaisIcon} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>

            {/* Informações Diretas */}
            <address className={Styles.contatosDiretos}>
              <div className={Styles.contatoItem}>
                <a href="mailto:nasscimmento@hotmail.com" className={Styles.contatoLink}>
                  <MdMailOutline className={Styles.contatoIcon} aria-hidden="true" />
                  nasscimmento@hotmail.com
                </a>
              </div>
              
              <div className={Styles.contatoItem}>
                <a
                  href="https://wa.me/5511989561439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.contatoLink}
                >
                  <FaWhatsapp className={Styles.contatoIcon} aria-hidden="true" />
                  (11) 98956-1439
                </a>
              </div>
              
              <div className={Styles.contatoItem}>
                <div className={Styles.contatoLink}>
                  <MdOutlineLocationOn className={Styles.contatoIcon} aria-hidden="true" />
                  <span>São Paulo - SP</span>
                </div>
              </div>
            </address>
          </section>

          {/* Lado Direito: Formulário (Oculto no Mobile/Tablet, visível no Desktop) */}
          <section className={Styles.formsContainer}>
            <form className={Styles.formulario} onSubmit={handleSubmit}>
              <div className={Styles.campo}>
                <label htmlFor="nome">Seu Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Styles.campo}>
                <label htmlFor="email">Seu Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Styles.campo}>
                <label htmlFor="assunto">Assunto</label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  placeholder="Qual o assunto?"
                  value={form.assunto}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Styles.campo}>
                <label htmlFor="mensagem">Sua Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Digite sua mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className={Styles.botao}>
                Enviar Mensagem
              </button>
            </form>
          </section>

        </div>
      </div>
    </main>
  );
}