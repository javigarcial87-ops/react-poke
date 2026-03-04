import styles from "./PokemonCard.module.css";
function PokemonCard({ pokemon }) {

  return (
    <div className={styles.card}>

      <h2 className={styles.title}>{pokemon.name}</h2>

      <img className={styles.image}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>

      <p>
        Tipo: {pokemon.types
          .map((type) => type.type.name)
          .join(", ")}
      </p>

    </div>
  );
}

export default PokemonCard;