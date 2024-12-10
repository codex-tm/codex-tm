import React from "react";

const LimitedOffer = () => {
  return (
    <section style={styles.section}>
      <p style={styles.text}>
        <strong>Apenas para os 100 primeiros compradores:</strong> Receba acesso aos bônus exclusivos e à comunidade VIP.
        <br />
        <strong>As vagas são limitadas</strong> e podem acabar a qualquer momento.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#FFF5F5",
    border: "1px solid #FF0000",
    borderRadius: "8px",
    animation: "fadeIn 1.5s ease-in-out",
  },
  text: {
    fontSize: "1.2em",
    color: "#FF0000",
    lineHeight: "1.6",
    fontWeight: "bold",
  },
};

export default LimitedOffer;
