function PokemonCard({ pokemon }) {

  return (
    <div className="pokemon-card">

      <h2>{pokemon.name}</h2>

      <img
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