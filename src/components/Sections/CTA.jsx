import React from "react";

const CTA = ({ text = "Clique Aqui", link = "#" }) => {
  const handleClick = () => {
    window.location.href = link; // Redireciona para o link passado como prop
  };

  return (
    <div style={styles.section}>
      <button style={styles.button} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

const styles = {
  section: {
    padding: "30px 20px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0047AB",
    color: "white",
    fontSize: "1.2em",
    fontWeight: "700",
    padding: "15px 30px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    animation: "pulse 1.5s infinite",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
  },
};

export default CTA;
