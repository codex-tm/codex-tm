import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Guarantee = () => {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.iconContainer}>
          <FontAwesomeIcon icon={faShieldAlt} style={styles.icon} />
        </div>
        <h3 style={styles.heading}>Garantia 100% de Satisfação</h3>
        <p style={styles.text}>
          Se por qualquer motivo você não estiver satisfeito com o nosso produto, garantimos a devolução do seu dinheiro em até <strong>7 dias</strong>. 
        </p>
        <p style={styles.text}>
          <FontAwesomeIcon icon={faCheckCircle} style={styles.checkIcon} /> Sem riscos, sem complicações.
        </p>
        <p style={styles.text}>
          <FontAwesomeIcon icon={faCheckCircle} style={styles.checkIcon} /> 100% seguro e garantido.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    textAlign: "center",
    background: "linear-gradient(145deg, #e0f7fa, #b2ebf2)", // Fundo gradiente sutil
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Sombra suave
    maxWidth: "900px",
    margin: "40px auto",
    animation: "fadeIn 1.5s ease-in-out",
  },
  content: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  iconContainer: {
    backgroundColor: "#00796B", // Fundo verde para o ícone
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    color: "white",
    fontSize: "2.5em",
  },
  heading: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#004D40",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2em",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "15px",
  },
  checkIcon: {
    color: "#00796B", // Ícones de confirmação
    marginRight: "10px",
  },
};

export default Guarantee;
