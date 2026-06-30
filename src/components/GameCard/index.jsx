import styles from "./styles.module.css";

export default function GameCard({ titulo, descricao, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} />

      <div className={styles.content}>
        <h3>{titulo}</h3>
        <p>{descricao}</p>

        <button
          onClick={() =>
            window.open(`https://www.google.com/search?q=${titulo}`, "_blank")
          }
        >
          Ver mais
        </button>
      </div>
    </div>
  );
}