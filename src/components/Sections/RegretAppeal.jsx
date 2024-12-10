import React from "react";
import CTA from "./CTA"; // Reutilizando o botão de chamada para ação

const RegretAppeal = () => {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h3 style={styles.heading}>
          Não deixe o arrependimento ser sua única escolha.
        </h3>
        <p style={styles.text}>
          Imagine olhar para trás daqui a <strong>6 meses</strong> e perceber que você perdeu a oportunidade de mudar sua vida para sempre.
        </p>
        <p style={styles.text}>
          <span style={styles.highlight}>A hora de agir é agora!</span> Sua transformação começa com uma decisão.
        </p>
        <div style={styles.buttonWrapper}>
          <CTA text="Garanta sua Transformação Agora" link="https://www.example.com/regret" />
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#1a1a2e", // Fundo sólido com tom escuro
    color: "white",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Sombra para profundidade
    maxWidth: "900px",
    margin: "40px auto",
    animation: "float 3s ease-in-out infinite", // Animação de subir e descer
  },
  content: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.5em",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#E63946", // Destaque no título
    lineHeight: "1.2",
  },
  text: {
    fontSize: "1.2em",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
  highlight: {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#FFD700", // Amarelo para chamar atenção
  },
  buttonWrapper: {
    marginTop: "30px",
  },
};

export default RegretAppeal;
