import React from "react";

const Introduction = () => {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h2 style={styles.heading}>
          Você já se sentiu <span style={styles.highlight}>confuso</span> ou <span style={styles.highlight}>frustrado</span>?
        </h2>
        <p style={styles.paragraph}>
          Sem saber como interpretar os sinais e desejos das mulheres? <strong>Você não está sozinho.</strong> 
          Muitos homens enfrentam os mesmos desafios, mas poucos encontram a resposta certa.
        </p>
        <p style={styles.paragraph}>
          Imagine como seria incrível ter clareza sobre o que elas realmente querem, saber como criar conexões profundas e ser lembrado como um homem <strong>autêntico</strong> e <strong>confiante</strong>.
        </p>
        <p style={styles.paragraph}>
          <span style={styles.highlight}>Este guia prático foi criado para transformar sua perspectiva e suas ações.</span>
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #f5f7fa, #e3e9ef)", // Fundo gradiente suave
    borderRadius: "15px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "40px auto",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Sombra moderna
    animation: "fadeIn 1.5s ease-in-out",
  },
  content: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#0047AB",
    lineHeight: "1.3",
    marginBottom: "20px",
  },
  highlight: {
    color: "#E63946", // Destaque em vermelho para impacto emocional
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "1.2em",
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
};

export default Introduction;
