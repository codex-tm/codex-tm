import React from "react";
import theme from "../../theme";

const Subtitle = () => {
  return (
    <section style={{ ...styles.section, backgroundColor: theme.colors.secondary }}>
      <h2 style={{ ...styles.subtitle, color: theme.colors.primary }}>
        Descubra como superar a frustração e conquistar conexões reais com as mulheres.
        <br />
        Tudo começa com um simples passo.
      </h2>

    </section>
  );
};

const styles = {
  section: {
    padding: theme.spacing.padding,
    textAlign: "center",
    boxShadow: theme.shadows.light,
  },
  subtitle: {
    fontSize: "2em",
    fontWeight: "700",
    lineHeight: "1.5",
    maxWidth: "800px",
    margin: theme.spacing.margin,
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default Subtitle;
