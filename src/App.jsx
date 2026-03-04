import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) {
      setPokemon(null);
      return;
    }

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
        );

        if (!res.ok) throw new Error("Pokemon no encontrado");

        const data = await res.json();
        setPokemon(data);

      } catch (err) {
        setPokemon(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [search]);

  return (
    <div className="app">
      <h1>Buscador de Pokémon</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;