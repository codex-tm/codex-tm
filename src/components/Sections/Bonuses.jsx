import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faListCheck, faUsers, faRocket } from "@fortawesome/free-solid-svg-icons";

const Bonuses = () => {
  const bonuses = [
    {
      icon: faBook,
      title: "Guia Rápido",
      description: "A Arte da Conquista em 5 Passos. Um roteiro simples e eficaz para você começar agora.",
    },
    {
      icon: faListCheck,
      title: "Check-list Diário",
      description: "Ferramenta prática para transformar teoria em ação, todos os dias.",
    },
    {
      icon: faUsers,
      title: "Acesso ao Grupo Privado",
      description: "Entre em uma comunidade de homens determinados a evoluir.",
    },
    {
      icon: faRocket,
      title: "E-book: Frases que Conectam",
      description: "Uma coleção exclusiva de frases e estratégias para criar conexões reais.",
    },
  ];

  return (
    <section style={styles.section}>
      <h3 style={styles.heading}>Bônus Exclusivos</h3>
      <div style={styles.grid}>
        {bonuses.map((bonus, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconContainer}>
              <FontAwesomeIcon icon={bonus.icon} style={styles.icon} />
            </div>
            <h4 style={styles.cardTitle}>{bonus.title}</h4>
            <p style={styles.description}>{bonus.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "1200px",
    margin: "40px auto",
  },
  heading: {
    fontSize: "2.5em",
    color: "#0047AB",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Grid responsivo
    gap: "20px",
  },
  card: {
    background: "linear-gradient(145deg, #ffffff, #e6e6e6)", // Fundo inicial
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Sombra moderna
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease", // Transições
    cursor: "pointer",
    animation: "fadeInUp 0.5s ease forwards",
  },
  cardHover: {
    transform: "scale(1.05)", // Efeito de hover
    background: "linear-gradient(145deg, #457b9d, #1d3557)", // Alteração no fundo ao passar o mouse
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
  },
  iconContainer: {
    backgroundColor: "#0047AB", // Fundo azul para ícones
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 15px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra para destacar o ícone
    transition: "transform 0.3s ease", // Transição de escala no ícone
  },
  icon: {
    color: "#fff",
    fontSize: "1.5em",
  },
  cardTitle: {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1em",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default Bonuses;
