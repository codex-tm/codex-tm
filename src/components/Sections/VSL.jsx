import React from "react";
import CTA from "./CTA"; // Reutilizando o botão de chamada para ação

const VSL = () => {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h3 style={styles.heading}>Descubra Como Transformar Sua Vida</h3>
        <p style={styles.paragraph}>
          Este vídeo exclusivo irá mostrar os segredos para conquistar confiança, clareza e conexões reais com as mulheres.
        </p>
        <div style={styles.videoContainer}>
          <iframe
            style={styles.video}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo link do seu vídeo
            title="Video Sales Letter"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={styles.buttonWrapper}>
          <CTA text="Transforme Sua Vida Agora" link="https://www.example.com/vsl" />
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #f5f7fa, #e3e9ef)", // Fundo gradiente suave
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Sombra moderna
    maxWidth: "900px",
    margin: "40px auto",
    animation: "fadeIn 1.5s ease-in-out",
  },
  content: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "40px",
  },
  videoContainer: {
    position: "relative",
    paddingBottom: "56.25%", // Proporção 16:9
    paddingTop: "25px",
    height: "0",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Sombra no vídeo
  },
  video: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
  },
  buttonWrapper: {
    marginTop: "30px",
  },
};

export default VSL;
