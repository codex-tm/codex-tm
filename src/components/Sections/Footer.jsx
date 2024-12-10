import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const faqItems = [
    {
      question: "Este guia é indicado para mim?",
      answer: "Sim! Ele foi desenvolvido para homens que desejam melhorar suas interações com as mulheres e criar relacionamentos mais significativos.",
    },
    {
      question: "Preciso de experiência prévia?",
      answer: "Não. O guia é simples e prático, ideal tanto para iniciantes quanto para quem já tem alguma experiência e quer melhorar seus resultados.",
    },
    {
      question: "Quando recebo o material?",
      answer: "Todo o conteúdo será enviado para o seu e-mail imediatamente após a confirmação da compra.",
    },
    {
      question: "E se eu não gostar do produto?",
      answer: "Você tem 7 dias para solicitar o reembolso, caso o produto não atenda às suas expectativas. Garantia 100% de satisfação.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.heading}>Perguntas Frequentes</h3>
      <div style={styles.faqContainer}>
        {faqItems.map((item, index) => (
          <div key={index} style={styles.faqItem}>
            <div
              style={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <FontAwesomeIcon
                icon={openIndex === index ? faMinus : faPlus}
                style={styles.icon}
              />
            </div>
            {openIndex === index && (
              <div style={styles.faqAnswer}>
                {item.answer}
              </div>
            )}
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
    background: "#f8f9fa",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    margin: "40px auto",
  },
  heading: {
    fontSize: "2.5em",
    color: "#0047AB",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  faqContainer: {
    textAlign: "left",
  },
  faqItem: {
    marginBottom: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },
  faqQuestion: {
    background: "#0047AB",
    color: "white",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
  },
  faqAnswer: {
    padding: "15px 20px",
    background: "#ffffff",
    color: "#333",
    fontSize: "1em",
    lineHeight: "1.6",
  },
  icon: {
    fontSize: "1.2em",
  },
};

export default Footer;
