import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.ribbon}>
        <div style={styles.ribbonContent}>
          <span style={styles.text}>
            A Chave para Entender as Mulheres Está Aqui – Transforme Sua Vida Amorosa em Dias!
          </span>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#111111",
    height: "100px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ribbon: {
    position: "absolute",
    width: "100%",
    height: "60px",
    backgroundColor: "#4CAF50",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  ribbonContent: {
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: "scrolling 15s linear infinite", // Animação contínua e suave
  },
  text: {
    fontSize: "01.3em",
    color: "black",
    fontWeight: "bold",
    padding: "0 20px",
    textTransform: "uppercase",
  },
};

export default Header;
