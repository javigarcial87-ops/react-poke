function SearchBar({search,setSearch}) {
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }

    return (
        <form>
            <input
            type="text"
            placeholder="Busca"
            value={search}
            onChange={handleChange}
            
            />
        </form>
    )
}

export default SearchBar